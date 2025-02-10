import {Component, Input, OnInit} from '@angular/core';
import {VoteService, VoteType} from "../../services/vote.service";

@Component({
  selector: 'app-vote-report-form',
  templateUrl: './vote-report-form.component.html',
  styleUrls: ['./vote-report-form.component.css']
})
export class VoteReportFormComponent implements OnInit {
  @Input() modal: any;
  @Input() vote: VoteType = {
    id: '',
    description: '',
    title: '',
    options: [],
  }

  allVoteCount = this.vote.options.reduce((acc, cur) => acc + cur.count, 0)

  ngOnInit() {
    this.allVoteCount = this.vote.options.reduce((acc, cur) => acc + cur.count, 0)
  }
}
