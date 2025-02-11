import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {CreateVoteComponent} from './create-vote/create-vote.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {VoteComponent} from './components/vote/vote.component';
import {SubmitVoteFormComponent} from './modal/submit-vote-form/submit-vote-form.component';
import {FormsModule} from "@angular/forms";
import {VoteReportFormComponent} from './modal/vote-report-form/vote-report-form.component';
import {VoteDescriptionComponent} from './modal/vote-description/vote-description.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateVoteComponent,
    NavbarComponent,
    VoteComponent,
    SubmitVoteFormComponent,
    VoteReportFormComponent,
    VoteDescriptionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterLink,
    RouterOutlet,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
