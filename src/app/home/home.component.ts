import {Component, OnInit} from '@angular/core';
import {VoteService, VoteType} from '../services/vote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  votes: VoteType[] = [];

  constructor(private voteService: VoteService) {
  }

  async ngOnInit(): Promise<void> {
    this.voteService.votes.subscribe((data) => {
      this.votes = data;
    });
  }
}
