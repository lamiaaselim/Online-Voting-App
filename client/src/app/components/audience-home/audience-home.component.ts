import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-audience-home',
  templateUrl: './audience-home.component.html',
  styleUrls: ['./audience-home.component.scss']
})
export class AudienceHomeComponent implements OnInit {
  activeTopics: any[] = [];
  recentFinishedTopics: any[] = [];
  comingSoonTopics: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit() {
    this.topicService.getAllTopics().subscribe(topics => {
      const currentDate = new Date();

      this.activeTopics = topics.filter(topic => new Date(topic.startDate) <= currentDate && new Date(topic.endDate) >= currentDate && !topic.isCancelled);
      this.recentFinishedTopics = topics.filter(topic => new Date(topic.endDate) < currentDate && new Date(topic.endDate) > new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000) && !topic.isCancelled);
      this.comingSoonTopics = topics.filter(topic => new Date(topic.startDate) > currentDate && new Date(topic.startDate) < new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000) && !topic.isCancelled);
    });
  }
}
