import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vote } from 'src/app/interfaces/vote';
import { AuthService } from 'src/app/services/auth.service';
import { TopicService } from 'src/app/services/topic.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.scss']
})
export class VoteFormComponent implements OnInit {

  voteForm = this.fb.group({
    selectedOption: ['', Validators.required]
  });

  topicId: string;
  // nationalId: string;
  topic: any;

  constructor(
    private fb: FormBuilder,
    private voteService: VoteService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private topicService: TopicService
  ) {
    this.topicId = this.route.snapshot.paramMap.get('id') || '';
    // this.nationalId = ''
  }

  ngOnInit() {
    // Fetch topic details when component initializes
    this.topicService.getTopicById(this.topicId).subscribe(topic => {
      this.topic = topic;
    });
  }

  onSubmit() {
    if (this.authService.isLoggedIn()) {
      this.authService.currentUser$.subscribe(user => {
        if (user && user._id) {
          const vote: Vote = {
            nationalId: user._id, // Ensure this is a string
            topicId: this.topicId,
            selectedOption: this.voteForm.value.selectedOption || '' // Default to empty string if null or undefined
          };

          this.voteService.addVote(vote).subscribe(
            () => {
              this.router.navigate(['/']);
            },
            (error) => {
              console.error('Error adding vote:', error);
              alert('Failed to add vote. Please check your input and try again.');
            }
          );
        } else {
          console.error('User is not authenticated or user ID is missing.');
          alert('User is not authenticated or user ID is missing.');
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
