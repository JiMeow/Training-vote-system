import {Component, TemplateRef} from '@angular/core';
import {VoteService} from "../vote.service";
import {VoteType} from "../vote/vote.component";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  votes: VoteType[] = [];

  constructor(private voteService: VoteService, private modalService: NgbModal) {
    this.voteService.votes.subscribe(votes => {
      this.votes = votes;
    });
  }

  open(content?: TemplateRef<any>) {
    if (content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    }
  }
}
