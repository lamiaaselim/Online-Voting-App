import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {

  topic: any = {};

  constructor(private route: ActivatedRoute, private topicService: TopicService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.topicService.getTopicById(id).subscribe(topic => {
        console.log(topic)
        this.topic = topic
      });
    }
  }
}
