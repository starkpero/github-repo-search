import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry } from 'rxjs'; 
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  //github profile
  public getProfile(searchParam): Observable<any>{
    let url = `https://api.github.com/users/${searchParam}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  //github repo
  public getRepos(searchParam): Observable<any>{
    let url = `https://api.github.com/users/${searchParam}/repos`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  public handleErrors(error: HttpErrorResponse){
    let errorMessage: string;
    if(error.error instanceof ErrorEvent){
      //client error
      errorMessage = `Message: ${error.error.message}`;
    }else{
      //server error
      errorMessage = `Status: ${error.status} message: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
