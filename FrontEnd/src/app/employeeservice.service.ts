import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class CourseserviceService {
  url = 'http://localhost:3000/courses';
  constructor(private http: HttpClient) {}

  addCourse(cou: Course) {
    return this.http.post(this.url, cou);
  }

  getCourseList() {
    return this.http.get<Course[]>(this.url);
  }

  deleteCourse(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateCourse(cou: Course) {
    return this.http.put(`${this.url}/${cou._id}`, cou);
  }
}
