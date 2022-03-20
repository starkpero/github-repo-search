import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'
import {NgxSpinnerModule} from 'ngx-spinner'

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { GithubProfileComponent } from '../components/github-profile/github-profile.component';
import { GithubReposComponent } from '../components/github-repos/github-repos.component';
import { GithubProfileCardComponent } from '../components/github-profile-card/github-profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GithubProfileComponent,
    GithubReposComponent,
    GithubProfileCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  exports: [NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  users: string[]

  constructor(){ }

 }
