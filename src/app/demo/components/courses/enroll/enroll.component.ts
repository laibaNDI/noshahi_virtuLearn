import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent {
  enrollmentData = {
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  };

  roles = [
    { value: 'student', label: 'Student' },
    { value: 'teacher', label: 'Teacher' }
  ];

  showPopup: boolean = false; // Controls popup visibility
  showRoleWarning: boolean = false;

  constructor(private router: Router) {}

  enroll() {
    if (!this.enrollmentData.role) {
      this.showRoleWarning = true;
      return;
    }
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    if (this.enrollmentData.role === 'student') {
      this.router.navigate(['/courses/view']);
    } else if (this.enrollmentData.role === 'teacher') {
      this.router.navigate(['/courses/manage']);
    }
  }
}
