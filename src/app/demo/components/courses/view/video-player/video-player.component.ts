

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  topics = [
    {
      title: 'Topic 1',
      video: 'assets/math.pdf',
      quiz: '/courses/view/quiz1',
      notes: '/courses/view/notes-player'
    }
  ];

  currentTopicIndex: number = 0;
  currentStep: 'video' | 'quiz' | 'notes' = 'video';
  currentUrl: string = '';

  constructor(private router: Router) {}  // Inject Angular Router

  ngOnInit(): void {
    this.setCurrentUrl();
  }

  setCurrentUrl(): void {
    const topic = this.topics[this.currentTopicIndex];

    if (this.currentStep === 'video') {
      this.currentUrl = topic.video;
    } else {
      // Navigate to the quiz or notes page
      this.router.navigateByUrl(topic[this.currentStep]);  
    }
  }

  nextStep(): void {
    if (this.currentStep === 'video') {
      this.currentStep = 'quiz';
    } else if (this.currentStep === 'quiz') {
      this.currentStep = 'notes';
    } else {
      if (this.currentTopicIndex < this.topics.length - 1) {
        this.currentTopicIndex++;
        this.currentStep = 'video';
      }
    }
    this.setCurrentUrl();
  }

  prevStep(): void {
    if (this.currentStep === 'notes') {
      this.currentStep = 'quiz';
    } else if (this.currentStep === 'quiz') {
      this.currentStep = 'video';
    } else {
      if (this.currentTopicIndex > 0) {
        this.currentTopicIndex--;
        this.currentStep = 'notes';
      }
    }
    this.setCurrentUrl();
  }
}



