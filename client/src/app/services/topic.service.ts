import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private apiUrl = 'http://localhost:8080/api/topic';

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getTopicResults(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/result`);
  }

  addTopic(topic: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, topic);
  }

  updateTopic(id: string, update: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, update);
  }
}
