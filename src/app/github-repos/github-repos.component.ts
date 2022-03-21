import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  // @Input() githubRepos:any;
  // @Input() totalRepos:number;
  // @Input() page:number;
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() language: string = '';
  @Input() repositoryLink: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  redirect = () => {
    window.open(this.repositoryLink, '_blank');
  };

}
