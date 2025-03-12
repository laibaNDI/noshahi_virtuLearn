// enroll.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
})
export class EnrollComponent {
  enrollmentData = {
    class: '',
    subjects: [],
    role: '' // Role will determine if the user is a student or teacher
  };

  availableSubjects = ['Math', 'Physics', 'Chemistry', 'Biology'];
  roles = [
    { value: 'student', label: 'Student' },
    { value: 'teacher', label: 'Teacher' }
  ];

  constructor(private router: Router) {}

  enroll() {
    if (this.enrollmentData.role === 'student') {
      this.router.navigate(['/courses/view']); // Redirect to course view page
    } else if (this.enrollmentData.role === 'teacher') {
      this.router.navigate(['/courses/manage']); // Redirect to manage page
    } else {
      alert('Please select a role to enroll.');
    }
  }
}
