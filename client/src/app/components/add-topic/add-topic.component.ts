import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent {
  topic = {
    statement: '',
    options: [{ option: '', votes: 0 }],
    startDate: new Date(),
    endDate: new Date(),
    isCancelled: false
  };

  constructor(private topicService: TopicService, private router: Router) {}

  addOption() {
    this.topic.options.push({ option: '', votes: 0 });
  }

  removeOption(index: number) {
    this.topic.options.splice(index, 1);
  }

  submit() {
    this.topicService.addTopic(this.topic).subscribe(() => {
      this.router.navigate(['/admin-dashboard']);
    });
  }
}
