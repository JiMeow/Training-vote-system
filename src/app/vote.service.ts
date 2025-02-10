import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {VoteType} from "./vote/vote.component";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  voteSubjects = new BehaviorSubject<VoteType[]>([{
    id: '1',
    title: 'Vote 1',
    description: 'Description 1',
    options1: false,
    options2: false,
    options3: false
  }, {
    id: '2',
    title: 'Vote 2',
    description: 'Description 2',
    options1: false,
    options2: false,
    options3: false
  }, {
    id: '3',
    title: 'Vote 3',
    description: 'Description 3',
    options1: false,
    options2: false,
    options3: false
  }]);
  votes = this.voteSubjects.asObservable();

  addVote(vote: VoteType) {
    this.voteSubjects.next([...this.voteSubjects.getValue(), vote]);
  }

  deleteVote(vote: VoteType) {
    this.voteSubjects.next(this.voteSubjects.getValue().filter(v => v.id !== vote.id));
  }

  getVote(id: string) {
    return this.voteSubjects.getValue().find(v => v.id === id);
  }
}
