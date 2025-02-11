import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, BehaviorSubject, Observable} from 'rxjs';

export type VoteOption = {
  text: string;
  count: number;
};

export type VoteType = {
  id: string;
  title: string;
  description: string;
  options: VoteOption[];
};

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private votesSubject: BehaviorSubject<VoteType[]> = new BehaviorSubject<VoteType[]>([]);
  public votes: Observable<VoteType[]> = this.votesSubject.asObservable();
  private apiUrl = 'http://localhost:5227/api/vote';

  constructor(private http: HttpClient) {
    void this.fetchVotes();
  }

  async generateVoteId(): Promise<string> {
    const data = await this.getVotes();
    return (data.length + 1).toString()
  }

  async getVotes(): Promise<VoteType[]> {
    return firstValueFrom(this.getVotesService());
  }

  async addVote(vote: VoteType): Promise<VoteType> {
    return firstValueFrom(this.addVoteService(vote)).then(async (data) => {
      await this.fetchVotes(); // Refresh votes after adding
      return data;
    });
  }

  async submitVote(vote: VoteType, voteIdx: number): Promise<VoteType> {
    return firstValueFrom(this.submitVoteService(vote, voteIdx)).then(async (data) => {
      await this.fetchVotes(); // Refresh votes after adding
      return data;
    });
  }

  getVotesService(): Observable<VoteType[]> {
    return this.http.get<VoteType[]>(this.apiUrl);
  }

  addVoteService(vote: VoteType): Observable<VoteType> {
    return this.http.post<VoteType>(`${this.apiUrl}/create`, vote);
  }

  submitVoteService(vote: VoteType, voteIdx: number): Observable<VoteType> {
    return this.http.post<VoteType>(`${this.apiUrl}/increase/${voteIdx}`, vote);
  }

  private async fetchVotes() {
    try {
      const votes = await firstValueFrom(this.getVotesService());
      this.votesSubject.next(votes); // Emit new votes to subscribers
    } catch (error) {
      console.error('Error fetching votes:', error);
    }
  }
}
