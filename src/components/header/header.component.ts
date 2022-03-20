import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public query: string;
  public githubProfile: any;
  public githubRepos: any;
  public errorMessage: string;
  public page: number=1;
  public totalRepos: Number

  constructor(private githubService: GithubService, private ngxSpinner: NgxSpinnerService) { }


  increment = (num: number) => {
    const currentNum = this.page + num;
    this.page =
      currentNum > this.page
        ? this.page
        : (this.page = currentNum);
  };

  decrement = (num: number) => {
    const currentNum = this.page - num;
    this.page = currentNum < 1 ? 1 : (this.page = currentNum);
  };

  pageChanged = (event: any) => {
    this.page = event;
  };
 
  
  public searchUser(){
    if(this.query === ' ' || this.query === undefined){
      alert('Please enter a user name');
    }
    //displaying the spinner
    this.ngxSpinner.show();
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
      this.totalRepos = data.length;

      //hide the spinner
      this.ngxSpinner.hide();
    }, (error)=>{
      this.errorMessage = error;
    });
  }

  


  ngOnInit(): void {
  }

}
