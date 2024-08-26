import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  topics: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit() {
    this.topicService.getAllTopics().subscribe(topics => this.topics = topics);
  }
}
