import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CreateVoteComponent } from './create-vote/create-vote.component';
import {AppRoutingModule} from "./app-routing.module";
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { VoteComponent } from './vote/vote.component';
import { SubmitVoteFormComponent } from './submit-vote-form/submit-vote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateVoteComponent,
    NavbarComponent,
    VoteComponent,
    SubmitVoteFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterLink,
    RouterOutlet,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
