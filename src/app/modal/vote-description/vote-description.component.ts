import {Component, Input} from '@angular/core';
import {VoteType} from "../../services/vote.service";

@Component({
  selector: 'app-vote-description',
  templateUrl: './vote-description.component.html',
  styleUrls: ['./vote-description.component.css']
})
export class VoteDescriptionComponent {
  @Input() modal: any;
  @Input() vote: VoteType = {
    id: '',
    description: '',
    title: '',
    options: [],
  }
}
