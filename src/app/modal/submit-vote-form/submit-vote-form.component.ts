import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {VoteOption, VoteService, VoteType} from "../../services/vote.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

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

  constructor(private voteService: VoteService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.selectedRadio = this.vote.options?.[0]
  }

  submitResult(id: string) {
    const idx = this.vote.options.findIndex((option) => option === this.selectedRadio)
    this.voteService.submitVote(id, idx);
    this.modal.dismiss()
  }

  open(content?: TemplateRef<any>) {
    if (content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    }
  }
}
