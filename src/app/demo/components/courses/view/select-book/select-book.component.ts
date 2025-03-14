import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-book',
  templateUrl: './select-book.component.html',
  styleUrls: ['./select-book.component.scss'],
})
export class SelectBookComponent implements OnInit {
  selectedGrade: number;
  booksForGrade: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedGrade = history.state.selectedGrade;
    this.booksForGrade = this.getBooksForGrade();
  }

  getBooksForGrade(): any[] {
    const allBooks = {
            9: [
              { title: 'Mathematics', description: 'Basic Algebra & Geometry', image: 'assets/demo/images/course/math.png' },
              { title: 'Physics', description: 'Mechanics & Thermodynamics', image: 'assets/demo/images/course/physics.png' },
              { title: 'Chemistry', description: 'Learn about chemical reactions', image: 'assets/demo/images/course/chemistry.png' },
              { title: 'Biology', description: 'Understand life sciences', image: 'assets/demo/images/course/biology.png' },
      
            ],
            10: [
              { title: 'Chemistry', description: 'Learn about chemical reactions', image: 'assets/demo/images/course/chemistry.png' },
              { title: 'Biology', description: 'Understand life sciences', image: 'assets/demo/images/course/biology.png' },
              { title: 'Advanced Mathematics', description: 'Calculus & Trigonometry', image: 'assets/demo/images/course/math.png' },
              { title: 'Physics', description: 'Electromagnetism & Waves', image: 'assets/demo/images/course/physics.png' },
      
            ],
            11: [
              { title: 'Advanced Mathematics', description: 'Calculus & Trigonometry', image: 'assets/demo/images/course/math.png' },
              { title: 'Physics', description: 'Electromagnetism & Waves', image: 'assets/demo/images/course/physics.png' },
              { title: 'Chemistry', description: 'Learn about chemical reactions', image: 'assets/demo/images/course/chemistry.png' },
              { title: 'Biology', description: 'Understand life sciences', image: 'assets/demo/images/course/biology.png' },
            ],
            12: [
              { title: 'Organic Chemistry', description: 'Organic compounds & Reactions', image: 'assets/demo/images/course/chemistry.png' },
              { title: 'Biotechnology', description: 'Genetics & Microbiology', image: 'assets/demo/images/course/biology.png' },
              { title: 'Chemistry', description: 'Learn about chemical reactions', image: 'assets/demo/images/course/chemistry.png' },
              { title: 'Biology', description: 'Understand life sciences', image: 'assets/demo/images/course/biology.png' },
      
            ],
          };
      

    return allBooks[this.selectedGrade] || [];
  }

  selectBook(book: any) {
    this.router.navigate(['/courses/view/select-chapter'], {
      state: { selectedBook: book, grade: this.selectedGrade },
    });
  }
}
