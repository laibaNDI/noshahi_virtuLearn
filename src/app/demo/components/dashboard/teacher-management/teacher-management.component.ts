import { Component } from '@angular/core';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
}

@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.scss']
})
export class TeacherManagementComponent {
  teachers: Teacher[] = [
    { id: 1, name: 'John Doe', subject: 'Mathematics', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', subject: 'Science', email: 'jane@example.com' }
  ];

  newTeacher: Teacher = { id: 0, name: '', subject: '', email: '' };

  addTeacher() {
    if (this.newTeacher.name && this.newTeacher.subject && this.newTeacher.email) {
      this.newTeacher.id = this.teachers.length + 1;
      this.teachers.push({ ...this.newTeacher });
      this.newTeacher = { id: 0, name: '', subject: '', email: '' };
    }
  }

  deleteTeacher(id: number) {
    this.teachers = this.teachers.filter(teacher => teacher.id !== id);
  }
}
