import {Component, Input, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VoteType} from "../../services/vote.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css', '../../../styles.css']
})
export class VoteComponent {
  @Input() isLatest = false;
  @Input() vote: VoteType = {id: '', title: '', description: '', options: []};

  constructor(private modalService: NgbModal) {
  }

  open(content?: TemplateRef<any>) {
    if (content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    }
  }
}
