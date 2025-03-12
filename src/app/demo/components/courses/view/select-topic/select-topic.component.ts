// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-select-topic',
//   templateUrl: './select-topic.component.html',
//   styleUrls: ['./select-topic.component.scss']
// })
// export class SelectTopicComponent {
//   selectedBook: any;
//   grade: string = '';
//   topics: any[] = [];

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     // Retrieve the selected book details from the router state (if available)
//     this.selectedBook = history.state.selectedBook || { title: 'Unknown Book', grade: 'Unknown Grade' };
//     this.grade = this.selectedBook.grade || 'Unknown Grade';
//     this.topics = this.getTopicsForBook();
//   }

//   getTopicsForBook(): any[] {
//     return [
//       {
//         title: 'Topic 1',
//         subtopics: [
//           { name: 'Subtopic 1.1', video: 'assets/demo/videos/video1.mp4', quiz: '/courses/view/quiz1', notes: 'assets/demo/notes/notes1.pdf' },
//           { name: 'Subtopic 1.2', video: 'assets/videos/video2.mp4', quiz: '/quiz2', notes: '/notes2' }
//         ],
//         isOpen: false,
//       },
//       {
//         title: 'Topic 2',
//         subtopics: [
//           { name: 'Subtopic 2.1', video: 'assets/videos/video3.mp4', quiz: '/courses/view/quiz1', notes: '/notes1' },
//           { name: 'Subtopic 2.2', video: 'assets/videos/video4.mp4', quiz: '/quiz2', notes: '/notes2' }
//         ],
//         isOpen: false,
//       },
//       {
//         title: 'Topic 3',
//         subtopics: [
//           { name: 'Subtopic 3.1', video: 'assets/videos/video5.mp4', quiz: '/courses/view/quiz3', notes: '/notes3' },
//           { name: 'Subtopic 3.2', video: 'assets/videos/video6.mp4', quiz: '/quiz3', notes: '/notes3' }
//         ],
//         isOpen: false,
//       },
//       {
//         title: 'Topic 4',
//         subtopics: [
//           { name: 'Subtopic 4.1', video: 'assets/videos/video7.mp4', quiz: '/courses/view/quiz4', notes: '/notes4' },
//           { name: 'Subtopic 4.2', video: 'assets/videos/video8.mp4', quiz: '/quiz4', notes: '/notes4' }
//         ],
//         isOpen: false,
//       }
//     ];
//   }

//   toggleDropdown(topic: any): void {
//     topic.isOpen = !topic.isOpen;
//   }

//   /**
//    * Opens the video player in a new tab.
//    * - Builds a playlist from the topic's subtopics.
//    * - Stores the playlist and current video index in localStorage.
//    * - Opens the video player route in a new tab.
//    */
//   playVideo(topic: any, subtopicIndex: number): void {
//     // Log for debugging purposes
//     console.log('Video icon clicked for topic:', topic.title, 'Subtopic index:', subtopicIndex);

//     // Build the playlist (an array of video URLs)
//     const playlist = topic.subtopics.map((subtopic: any) => subtopic.video);
//     localStorage.setItem('videoPlaylist', JSON.stringify(playlist));
//     localStorage.setItem('currentVideoIndex', subtopicIndex.toString());

//     // Build an absolute URL for the video player route
//     const videoPlayerUrl = `${window.location.origin}/courses/view/video-player`;
//     console.log('Opening video player at:', videoPlayerUrl);

//     // Open the video player route in a new tab
//     const newWindow = window.open(videoPlayerUrl, '_blank');

//     // Check if the new tab was blocked
//     if (!newWindow) {
//       console.error('Popup blocked. Please allow popups for this site.');
//     }
//   }

//   navigateTo(route: string): void {
//     if (route) {
//       this.router.navigate([route]);
//     }
//   }

//   goBack(): void {
//     this.router.navigate(['/courses/view/select-chapter']);
//   }

//   goHome(): void {
//     this.router.navigate(['/courses/view']);
//   }
// }






import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-topic',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.scss']
})
export class SelectTopicComponent {
  selectedBook: any;
  grade: string = '';
  topics: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedBook = history.state.selectedBook || { title: 'Unknown Book', grade: 'Unknown Grade' };
    this.grade = this.selectedBook.grade || 'Unknown Grade';
    this.topics = this.getTopicsForBook();
  }

  getTopicsForBook(): any[] {
    return [
      {
        title: 'Topic 1',
        subtopics: [
          { name: 'Subtopic 1.1', video: 'assets/demo/videos/video1.mp4', quiz: '/courses/view/quiz1', notes: 'public/notes/math.pdf' },
          { name: 'Subtopic 1.2', video: 'assets/videos/video2.mp4', quiz: '/quiz2', notes: '/notes2' }
        ],
        isOpen: false,
      },
      {
        title: 'Topic 2',
        subtopics: [
          { name: 'Subtopic 2.1', video: 'assets/videos/video3.mp4', quiz: '/courses/view/quiz1', notes: '/notes1' },
          { name: 'Subtopic 2.2', video: 'assets/videos/video4.mp4', quiz: '/quiz2', notes: '/notes2' }
        ],
        isOpen: false,
      }
    ];
  }

  toggleDropdown(topic: any): void {
    topic.isOpen = !topic.isOpen;
  }

  playVideo(topic: any, subtopicIndex: number): void {
    console.log('Opening video for:', topic.title, 'Subtopic index:', subtopicIndex);

    const playlist = topic.subtopics.map((subtopic: any) => subtopic.video);
    localStorage.setItem('videoPlaylist', JSON.stringify(playlist));
    localStorage.setItem('currentVideoIndex', subtopicIndex.toString());

    const videoPlayerUrl = `${window.location.origin}/courses/view/video-player`;
    const newWindow = window.open(videoPlayerUrl, '_blank');

    if (!newWindow) {
      console.error('Popup blocked. Please allow pop-ups.');
    }
  }

  openNotes(subtopic: any): void {
    console.log('Opening notes for:', subtopic.name, 'URL:', subtopic.notes);

    if (!subtopic.notes) {
      console.error('No notes available.');
      return;
    }

    // Store notes URL in local storage
    localStorage.setItem('selectedNotes', subtopic.notes);

    // Navigate to Notes Player Component
    this.router.navigate(['/courses/view/notes-player']);
  }

  navigateTo(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  goBack(): void {
    this.router.navigate(['/courses/view/select-chapter']);
  }

  goHome(): void {
    this.router.navigate(['/courses/view']);
  }
}