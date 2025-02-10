import {Component} from '@angular/core';
import {VoteOption, VoteService, VoteType} from "../services/vote.service";

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

  constructor(private voteService: VoteService) {
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

  submit() {
    console.log('submit data')
  }
}
