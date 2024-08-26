import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/interfaces/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {

  topic: Topic = {
    statement: '',
    options: [{ option: '', votes: 0 }],
    startDate: new Date(),
    endDate: new Date(),
    isCancelled: false
  };

  topicId: string | undefined;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.topicId = this.route.snapshot.paramMap.get('id') || undefined;
    if (this.topicId) {
      this.topicService.getTopicById(this.topicId).subscribe((topic) => {
        this.topic = {
          ...topic,
          // Convert to Date object if necessary
          startDate: new Date(topic.startDate),
          endDate: new Date(topic.endDate)
        };
      });
    }
  }

  onSubmit(topicForm: any) {
    if (topicForm.valid && this.topicId) {
      this.topicService.updateTopic(this.topicId, this.topic).subscribe(() => {
        this.router.navigate(['/admin-dashboard']);
      });
    }
  }

  addOption() {
    this.topic.options.push({ option: '', votes: 0 });
  }

  removeOption(index: number) {
    this.topic.options.splice(index, 1);
  }
}
