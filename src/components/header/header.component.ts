import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public query: string;
  public githubProfile: any;
  public githubRepos: any[];
  public errorMessage: string;

  constructor(private githubService: GithubService) { }

 
  public searchUser(){
     //fetch github profile
    this.githubService.getProfile(this.query).subscribe((data)=>{
      console.log(data);
      this.githubProfile = data;
    }, (error)=>{
      this.errorMessage = error;
    });

    //fetch github repos
    this.githubService.getRepos(this.query).subscribe((data)=>{
      console.log(data);
      this.githubRepos = data;
    }, (error)=>{
      this.errorMessage = error;
    });
  }

  


  ngOnInit(): void {
  }

}
