import { Component } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  topics: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.getAllTopics().subscribe((data) => {
      this.topics = data;
    });
  }
}
