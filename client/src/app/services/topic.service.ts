import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../interfaces/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private apiUrl = 'http://localhost:8080/api/topic';

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.apiUrl);
  }

  getTopicById(id: string): Observable<Topic> {
    return this.http.get<Topic>(`${this.apiUrl}/${id}`);
  }

  getTopicResults(id: string): Observable<Topic> {
    return this.http.get<Topic>(`${this.apiUrl}/result/${id}`);
  }

  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(this.apiUrl, topic);
  }

  updateTopic(id: string, update: Partial<Topic>): Observable<Topic> {
    return this.http.put<Topic>(`${this.apiUrl}/${id}`, update);
  }

}
