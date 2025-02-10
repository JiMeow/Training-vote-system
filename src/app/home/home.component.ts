import {Component} from '@angular/core';
import {VoteService, VoteType} from "../services/vote.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  votes: VoteType[] = [];

  constructor(private voteService: VoteService,) {
    this.voteService.votes.subscribe(votes => {
      this.votes = votes;
    });
  }
}
