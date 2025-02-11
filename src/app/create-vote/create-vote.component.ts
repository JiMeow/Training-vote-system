import {Component} from '@angular/core';
import {VoteOption, VoteService, VoteType} from "../services/vote.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.css']
})
export class CreateVoteComponent {

  options: VoteOption[] = [{
    text: '',
    count: 0,
  }]
  topicText = '';
  descriptionText = '';

  constructor(private voteService: VoteService, private router: Router) {
  }

  addVote(vote: VoteType) {
    this.voteService.addVote(vote)
  }

  addOption() {
    this.options = [...this.options, {
      text: '',
      count: 0
    }]
  }

  resetState() {
    this.options = [{
      text: '',
      count: 0,
    }]
    this.topicText = '';
    this.descriptionText = '';
  }

  submit() {
    this.addVote({
      id: this.voteService.generateVoteId(),
      title: this.topicText,
      description: this.descriptionText,
      options: this.options
    })
    this.resetState();
    void this.router.navigate(['/'])
  }
}
