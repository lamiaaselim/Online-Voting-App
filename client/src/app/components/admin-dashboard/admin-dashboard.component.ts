import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  topics: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit() {
    this.topicService.getAllTopics().subscribe(topics => this.topics = topics);
  }
}
