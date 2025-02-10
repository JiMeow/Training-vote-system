import {Component, EventEmitter, ForwardRefFn, Input, Output, TemplateRef} from '@angular/core';

export type VoteType = {
  id: string;
  title: string;
  description: string;
  options1: boolean;
  options2: boolean;
  options3: boolean;
}

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css', '../../styles.css']
})
export class VoteComponent {
  @Input() isLatest = false;
  @Input() vote: VoteType = {id: '', title: '', description: '', options1: false, options2: false, options3: false};

  @Output() openSubmitVoteForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() openReportVoteForm: EventEmitter<void> = new EventEmitter<void>();
}
