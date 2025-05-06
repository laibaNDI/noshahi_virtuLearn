import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface Student {
  id: number;
  name: string;
  grade: string;
  enrollmentDate: string;
}

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss'],
})
export class StudentManagementComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  displayStudentModal = false;
  displayDeleteConfirm = false;
  isEditStudent = false;
  selectedStudent: Student | null = null;

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('gradeInput') gradeInput!: ElementRef;
  @ViewChild('dateInput') dateInput!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.students = [
      { id: 1, name: 'John Doe', grade: '6', enrollmentDate: '2024-03-01' },
      { id: 2, name: 'Jane Smith', grade: '7', enrollmentDate: '2024-02-15' },
    ];
    this.filteredStudents = [...this.students];
  }

  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.toLowerCase();

    this.filteredStudents = this.students.filter((student) =>
      student.name.toLowerCase().includes(filterValue)
    );
  }

  openAddStudentModal() {
    this.isEditStudent = false;
    this.displayStudentModal = true;
  }

  editStudent(student: Student) {
    this.isEditStudent = true;
    this.selectedStudent = student;
    this.displayStudentModal = true;

    setTimeout(() => {
      this.nameInput.nativeElement.value = student.name;
      this.gradeInput.nativeElement.value = student.grade;
      this.dateInput.nativeElement.value = student.enrollmentDate;
    }, 0);
  }

  saveStudent(event: Event) {
    event.preventDefault();
    const name = this.nameInput.nativeElement.value;
    const grade = this.gradeInput.nativeElement.value;
    const enrollmentDate = this.dateInput.nativeElement.value;

    if (this.isEditStudent && this.selectedStudent) {
      this.selectedStudent.name = name;
      this.selectedStudent.grade = grade;
      this.selectedStudent.enrollmentDate = enrollmentDate;
    } else {
      this.students.push({
        id: this.students.length + 1,
        name,
        grade,
        enrollmentDate,
      });
    }

    this.filteredStudents = [...this.students];
    this.closeModal();
  }

  confirmDeleteStudent(student: Student) {
    this.selectedStudent = student;
    this.displayDeleteConfirm = true;
  }

  deleteStudent() {
    if (this.selectedStudent) {
      this.students = this.students.filter(
        (student) => student.id !== this.selectedStudent!.id
      );
      this.filteredStudents = [...this.students];
    }
    this.displayDeleteConfirm = false;
  }

  closeModal() {
    this.displayStudentModal = false;
  }
}
