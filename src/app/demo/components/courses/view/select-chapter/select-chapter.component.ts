// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-select-chapter',
//   templateUrl: './select-chapter.component.html',
//   styleUrls: ['./select-chapter.component.scss'],
// })
// export class SelectChapterComponent implements OnInit {
//   selectedBook: any;
//   grade: string = '';
//   chapters: any[] = [];

//   constructor(private router: Router) {}

//   ngOnInit() {
//     // Retrieve the selected book from the previous page (select-book)
//     this.selectedBook = history.state.selectedBook || { title: 'Unknown Book', grade: 'Unknown Grade' };
//     this.grade = this.selectedBook.grade || 'Unknown Grade';
    
//     // Get chapters based on the selected book
//     this.chapters = this.getChaptersForBook();
//   }

//   // Get chapters dynamically based on the selected book
//   getChaptersForBook(): any[] {
//     if (this.selectedBook.title === 'Mathematics') {
//       return [
//         { title: 'Chapter 1: Algebra', image: 'assets/demo/images/course/math1.png' },
//         { title: 'Chapter 2: Geometry', image: 'assets/demo/images/course/math2.png' },
//         { title: 'Chapter 3: Calculus', image: 'assets/demo/images/course/math3.png' },
//       ];
//     } else if (this.selectedBook.title === 'Physics') {
//       return [
//         { title: 'Chapter 1: Mechanics', image: 'assets/demo/images/course/physics1.png' },
//         { title: 'Chapter 2: Thermodynamics', image: 'assets/demo/images/course/physics2.png' },
//         { title: 'Chapter 3: Waves', image: 'assets/demo/images/course/physics3.png' },
//       ];
//     } else {
//       return [
//         { title: 'Chapter 1', image: 'assets/demo/images/course/default.png' },
//         { title: 'Chapter 2', image: 'assets/demo/images/course/default.png' },
//       ];
//     }
//   }

//   // Navigate to the selected chapter's page
//   selectChapter(chapter: any) {
//     this.router.navigate(['/courses/view/selected-topic'], {
//       state: { selectedChapter: chapter },
//     });
//   }

//   // Go back to the previous page (select-book)
//   goBack() {
//     this.router.navigate(['/courses/view/select-book']);
//   }

//   // Go to the next chapter
//   goNext() {
//     console.log('Next button clicked');
//     // Implement your logic to go to the next chapter
//     this.router.navigate(['/courses/view/next-chapter']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-chapter',
  templateUrl: './select-chapter.component.html',
  styleUrls: ['./select-chapter.component.scss'],
})
export class SelectChapterComponent implements OnInit {
  selectedBook: any;
  grade: string = '';
  chapters: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedBook = history.state.selectedBook || { title: 'Unknown Book' };
    this.grade = history.state.grade || 'Unknown Grade';
    this.chapters = this.getChaptersForBook();
  }

  getChaptersForBook(): any[] {
    if (this.selectedBook.title === 'Mathematics') {
      return [
        { title: 'Chapter 1: Algebra', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 2: Geometry', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/math.png' },
      ];
    } else if (this.selectedBook.title === 'Physics') {
      return [ { title: 'Chapter 1: Algebra', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 2: Geometry', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/math.png' },];
    }else if (this.selectedBook.title === 'Chemistry') {
      return [{ title: 'Chapter 1', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 1: Algebra', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 2: Geometry', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/math.png' },];
    }else if (this.selectedBook.title === 'Biology') {
      return [ { title: 'Chapter 1: Algebra', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 2: Geometry', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/math.png' },];
    }else if (this.selectedBook.title === 'AdvancedMathematics') {
      return [ { title: 'Chapter 1: Algebra', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 2: Geometry', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/math.png' },];
    }else if (this.selectedBook.title === 'OrganicChemistry') {
      return [ { title: 'Chapter 1: Algebra', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 2: Geometry', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/math.png' },];
    }else if (this.selectedBook.title === 'Biotechnology') {
      return [ { title: 'Chapter 1: Algebra', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 2: Geometry', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/biology.png' },
        { title: 'Chapter 9: Algebra', image: 'assets/demo/images/course/math.png' },
        { title: 'Chapter 10: Geometry', image: 'assets/demo/images/course/physics.png' },
        { title: 'Chapter 11: Algebra', image: 'assets/demo/images/course/chemistry.png' },
        { title: 'Chapter 12: Geometry', image: 'assets/demo/images/course/math.png' },];
    }
    else {
      return [{ title: 'Chapter 1', image: 'assets/demo/images/course/default.png' }];
    }
  }

  selectChapter(chapter: any) {
    this.router.navigate(['/courses/view/select-topic'], {
      state: { selectedChapter: chapter },
    });
  }

  goBack() {
    this.router.navigate(['/courses/view/select-book']);
  }

  goHome() {
    this.router.navigate(['/courses/view']); // Redirect to home page
  }
}
