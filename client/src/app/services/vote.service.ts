import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vote } from '../interfaces/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  addVote(vote: Vote): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/vote`, vote);
  }
}
