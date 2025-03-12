import { Component } from '@angular/core';

@Component({
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
    student: any = {
        name: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: '',
        course: '',
      };
      showErrorMessage: boolean = false;
    
      onSubmit(form: any) {
        if (form.invalid) {
          this.showErrorMessage = true; // Show error message
          setTimeout(() => {
            this.showErrorMessage = false; // Hide error message after 3 seconds
          }, 3000);
          return;
        }
    
        console.log('Form Submitted:', this.student);
        alert('Registration Successful!');
        form.resetForm();
      }
    
}
