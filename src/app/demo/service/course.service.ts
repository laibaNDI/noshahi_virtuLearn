// src/app/demo/service/course.service.ts
import { Injectable } from '@angular/core';
import { Course } from 'src/app/demo/api/course';  // Make sure the path to Course is correct

@Injectable({
  providedIn: 'root'  // Ensure this service is available throughout the app
})
export class CourseService {
  deleteCourse(id: number) {
      throw new Error('Method not implemented.');
  }
  createCourse(course: Course) {
      throw new Error('Method not implemented.');
  }
  updateCourse(course: Course) {
      throw new Error('Method not implemented.');
  }
  getCourses() {
      throw new Error('Method not implemented.');
  }
  // Sample courses data (you can replace it with a real API or database call)
  courses: Course[] = [
    {
      id: 1, courseName: 'Mathematics',
      name: undefined,
      status: undefined
    },
    {
      id: 2, courseName: 'Science',
      name: undefined,
      status: undefined
    },
    {
      id: 3, courseName: 'History',
      name: undefined,
      status: undefined
    }
  ];

  // Method to filter courses based on the search term
  filterCourses(searchTerm: string): Course[] {
    return this.courses.filter(course => course.courseName.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  // Add more methods as needed for managing courses, like add, remove, update, etc.
}
