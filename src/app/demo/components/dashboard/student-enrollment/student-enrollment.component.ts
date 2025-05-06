import { Component, ViewChild, ElementRef } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class StudentEnrollmentComponent {
  students: any[] = [];

  @ViewChild('studentName') studentName!: ElementRef;
  @ViewChild('grade') grade!: ElementRef;
  @ViewChild('enrollmentDate') enrollmentDate!: ElementRef;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {}

  enrollStudent() {
    const name = this.studentName.nativeElement.value.trim();
    const grade = this.grade.nativeElement.value;
    const enrollmentDate = this.enrollmentDate.nativeElement.value;

    if (!name || !grade || !enrollmentDate) {
      this.messageService.add({ severity: 'warn', summary: 'Missing Fields', detail: 'Please fill all fields.' });
      return;
    }

    this.students.push({ name, grade, enrollmentDate });

    // Clear input fields after adding student
    this.studentName.nativeElement.value = '';
    this.grade.nativeElement.value = '';
    this.enrollmentDate.nativeElement.value = '';

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student Enrolled!' });
  }

  confirmDelete(student: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${student.name}?`,
      accept: () => {
        this.students = this.students.filter(s => s !== student);
        this.messageService.add({ severity: 'info', summary: 'Deleted', detail: 'Student Removed!' });
      }
    });
  }
}
