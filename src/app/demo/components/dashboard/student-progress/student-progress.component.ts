import { Component } from '@angular/core';

@Component({
  selector: 'app-student-progress',
  templateUrl: './student-progress.component.html',
  styleUrls: ['./student-progress.component.scss'],
})
export class StudentProgressComponent {
  // Dropdown Options
  grades = [
    { label: 'Grade 9', value: '9' },
    { label: 'Grade 10', value: '10' },
    { label: 'Grade 11', value: '11' },
    { label: 'Grade 12', value: '12' },
  ];

  subjects = [
    { label: 'Mathematics', value: 'Math' },
    { label: 'Science', value: 'Science' },
    { label: 'English', value: 'English' },
    { label: 'History', value: 'History' },
  ];

  sections = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' }
  ];

  selectedGrade: string = '';
  selectedSubject: string = '';
  selectedSection: string = '';
  searchTerm: string = '';

  // Student Data
  students = [
    {
      id: 1,
      name: 'Ali',
      grade: '9',
      subject: 'Math',
      section: 'A',
      videoProgress: 65,
      quizProgress: 80,
      activityProgress: 75,
      quizAttempts: 5,
      videoWatched: true,
      notesRead: true,
      totalMarks: 85,
      topics: [
        { name: 'Topic 1', quizAttempts: 2, videoWatched: true, notesRead: false },
        { name: 'Topic 2', quizAttempts: 3, videoWatched: true, notesRead: true },
      ]
    },
    {
      id: 2,
      name: 'Sara',
      grade: '9',
      subject: 'Math',
      section: 'A',
      videoProgress: 80,
      quizProgress: 70,
      activityProgress: 85,
      quizAttempts: 4,
      videoWatched: true,
      notesRead: true,
      totalMarks: 78,
      topics: [
        { name: 'Topic 1', quizAttempts: 3, videoWatched: true, notesRead: true },
        { name: 'Topic 2', quizAttempts: 1, videoWatched: false, notesRead: true },
      ]
    },
    // Add more students if needed
  ];

  selectedStudent: any = null;
  selectedTopic: any = null;
  progressModalVisible = false;
  topicModalVisible = false;

  // Filter students dynamically based on selected filters
  getFilteredStudents() {
    return this.students.filter(student =>
      (!this.selectedGrade || student.grade === this.selectedGrade) &&
      (!this.selectedSubject || student.subject === this.selectedSubject) &&
      (!this.selectedSection || student.section === this.selectedSection) &&
      (!this.searchTerm || student.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }

  // Get total lessons of filtered students
  getTotalLessons(subject: string) {
    return this.getFilteredStudents()
      .filter(student => student.subject === subject)
      .map(student => student.topics.length)
      .reduce((acc, val) => acc + val, 0);
  }

  openStudentProgress(student: any) {
    this.selectedStudent = student;
    this.progressModalVisible = true;
  }

  openTopicDetail(topic: any) {
    this.selectedTopic = topic;
    this.topicModalVisible = true;
  }
}
