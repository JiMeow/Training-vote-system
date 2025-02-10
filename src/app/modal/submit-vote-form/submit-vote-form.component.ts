import {Component, Input, OnInit} from '@angular/core';
import {VoteOption, VoteService, VoteType} from "../../services/vote.service";

@Component({
  selector: 'app-submit-vote-form',
  templateUrl: './submit-vote-form.component.html',
  styleUrls: ['./submit-vote-form.component.css']
})
export class SubmitVoteFormComponent implements OnInit {
  @Input() modal: any;
  @Input() vote: VoteType = {
    id: '',
    description: '',
    title: '',
    options: [],
  }

  selectedRadio?: VoteOption

  constructor(private voteService: VoteService) {
  }

  ngOnInit() {
    this.selectedRadio = this.vote.options?.[0]
  }

  submitResult(id: string) {
    const idx = this.vote.options.findIndex((option) => option === this.selectedRadio)
    this.voteService.submitVote(id, idx);
    this.modal.dismiss()
  }
}
