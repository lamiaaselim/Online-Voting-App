import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.scss'],
})
export class AllTopicsComponent implements OnInit {
  topics: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit() {
    this.topicService.getAllTopics().subscribe(topics => this.topics = topics);
  }
}
