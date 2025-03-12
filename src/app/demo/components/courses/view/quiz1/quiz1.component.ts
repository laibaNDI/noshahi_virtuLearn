import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.scss']
})
export class Quiz1Component {
  topicName = 'Mathematics'; // Change as needed
  quizForm: FormGroup;
  questions = [
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], answer: 'Mars' }
  ];
  score: number | null = null;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.quizForm = this.fb.group({});
    this.questions.forEach((q, index) => {
      this.quizForm.addControl('question' + index, new FormControl('', Validators.required));
    });
  }

  onSubmit() {
    this.submitted = true;
    let score = 0;
    this.questions.forEach((q, index) => {
      if (this.quizForm.get('question' + index)?.value === q.answer) {
        score++;
      }
    });
    this.score = score;
  }

  nextStep() {
    this.router.navigateByUrl('/courses/view/notes-player');  // Navigate to Notes
  }

  prevStep() {
    this.router.navigateByUrl('/courses/view/video-player');  // Navigate back to Video
  }
}
