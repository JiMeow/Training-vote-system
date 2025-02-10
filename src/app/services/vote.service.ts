import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export type VoteOption = {
  text: string;
  count: number;
}

export type VoteType = {
  id: string;
  title: string;
  description: string;
  options: VoteOption[];
}

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  voteSubjects = new BehaviorSubject<VoteType[]>([{
    id: '1',
    title: 'Vote 1',
    description: 'Description 1',
    options: [{
      text: 'first choice',
      count: 0,
    }, {
      text: 'second choice',
      count: 0,
    }, {
      text: 'third choice',
      count: 0,
    }],
  }, {
    id: '2',
    title: 'Vote 2',
    description: 'Description 2',
    options: [{
      text: 'first choice',
      count: 0,
    }, {
      text: 'second choice',
      count: 0,
    }, {
      text: 'third choice',
      count: 0,
    }],
  }, {
    id: '3',
    title: 'Vote 3',
    description: 'Description 3',
    options: [{
      text: 'first choice',
      count: 0,
    }, {
      text: 'second choice',
      count: 0,
    }, {
      text: 'third choice',
      count: 0,
    }],
  }]);
  votes = this.voteSubjects.asObservable();

  constructor() {
  }

  generateVoteId() {
    return (this.voteSubjects.value.length + 1).toString()
  }

  addVote(vote: VoteType) {
    this.voteSubjects.next([...this.voteSubjects.getValue(), vote]);
  }

  submitVote(id: string, voteIdx: number) {
    const idxVote = this.voteSubjects.value.findIndex((vote) => vote.id === id);
    this.voteSubjects.value[idxVote].options[voteIdx].count++;

    this.voteSubjects.next(this.voteSubjects.value)
  }
}
