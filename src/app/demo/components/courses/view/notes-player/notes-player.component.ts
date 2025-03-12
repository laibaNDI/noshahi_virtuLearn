// import { Component, OnInit } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-notes-player',
//   templateUrl: './notes-player.component.html',
//   styleUrls: ['./notes-player.component.scss']
// })
// export class NotesPlayerComponent implements OnInit {
//   topics = [
//     {
//       title: 'Topic 1',
//       notes: 'assets/notes/math.pdf', // Ensure the correct path
//       quiz: '/courses/view/quiz1',
//       video: '/courses/view/video1'
//     }
//   ];

//   currentTopicIndex: number = 0;
//   currentStep: 'notes' | 'quiz' | 'video' = 'notes';
//   currentUrl: SafeResourceUrl = '';

//   constructor(private router: Router, private sanitizer: DomSanitizer) {}

//   ngOnInit(): void {
//     this.setCurrentUrl();
//   }

//   setCurrentUrl(): void {
//     const topic = this.topics[this.currentTopicIndex];

//     if (this.currentStep === 'notes') {
//       this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(topic.notes);
//       console.log('Notes URL:', topic.notes);
//     } else {
//       this.router.navigateByUrl(topic[this.currentStep]);
//     }
//   }

//   nextStep(): void {
//     const steps: ('notes' | 'quiz' | 'video')[] = ['notes', 'quiz', 'video'];
//     const nextIndex = steps.indexOf(this.currentStep) + 1;

//     if (nextIndex < steps.length) {
//       this.currentStep = steps[nextIndex];
//     } else if (this.currentTopicIndex < this.topics.length - 1) {
//       this.currentTopicIndex++;
//       this.currentStep = 'notes';
//     }

//     this.setCurrentUrl();
//   }

//   prevStep(): void {
//     const steps: ('notes' | 'quiz' | 'video')[] = ['notes', 'quiz', 'video'];
//     const prevIndex = steps.indexOf(this.currentStep) - 1;

//     if (prevIndex >= 0) {
//       this.currentStep = steps[prevIndex];
//     } else if (this.currentTopicIndex > 0) {
//       this.currentTopicIndex--;
//       this.currentStep = 'video';
//     }

//     this.setCurrentUrl();
//   }

//   goBack(): void {
//     this.router.navigate(['/courses/view/select-topic']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-player',
  templateUrl: './notes-player.component.html',
  styleUrls: ['./notes-player.component.scss']
})
export class NotesPlayerComponent implements OnInit {
  topics = [
    {
      title: 'Topic 1',
      notes: 'assets/notes/math.pdf', // PDF file ka correct path
      quiz: '/courses/view/quiz1',
      video: '/courses/view/video1'
    }
  ];

  currentTopicIndex: number = 0;
  currentStep: 'notes' | 'quiz' | 'video' = 'notes';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getCurrentPdfUrl(): string {
    return this.topics[this.currentTopicIndex].notes;
  }

  nextStep(): void {
    const steps: ('notes' | 'quiz' | 'video')[] = ['notes', 'quiz', 'video'];
    const nextIndex = steps.indexOf(this.currentStep) + 1;

    if (nextIndex < steps.length) {
      this.currentStep = steps[nextIndex];
    } else if (this.currentTopicIndex < this.topics.length - 1) {
      this.currentTopicIndex++;
      this.currentStep = 'notes';
    }

    if (this.currentStep !== 'notes') {
      this.router.navigateByUrl(this.topics[this.currentTopicIndex][this.currentStep]);
    }
  }

  prevStep(): void {
    const steps: ('notes' | 'quiz' | 'video')[] = ['notes', 'quiz', 'video'];
    const prevIndex = steps.indexOf(this.currentStep) - 1;

    if (prevIndex >= 0) {
      this.currentStep = steps[prevIndex];
    } else if (this.currentTopicIndex > 0) {
      this.currentTopicIndex--;
      this.currentStep = 'video';
    }

    if (this.currentStep !== 'notes') {
      this.router.navigateByUrl(this.topics[this.currentTopicIndex][this.currentStep]);
    }
  }

  goBack(): void {
    this.router.navigate(['/courses/view/select-topic']);
  }
}
