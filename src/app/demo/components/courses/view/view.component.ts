// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-view',
//   templateUrl: './view.component.html',
//   styleUrls: ['./view.component.scss'],
// })
// export class ViewComponent {
//   grades = [9, 10, 11, 12];
//   selectedGrade: number | null = null;

//   constructor(private router: Router) {}

//   selectGrade(grade: number) {
//     this.selectedGrade = grade;
//     this.router.navigate(['/courses/view/select-book'], {
//       state: { selectedGrade: this.selectedGrade },
//     });
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  grades = [9, 10, 11, 12];
  selectedGrade: number | null = null;

  constructor(private router: Router) {}

  selectGrade(grade: number) {
    this.selectedGrade = grade;
    this.router.navigate(['/courses/view/select-book'], {
      state: { selectedGrade: this.selectedGrade },
    });
  }
}
