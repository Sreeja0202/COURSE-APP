import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseserviceService {
  constructor(private http: HttpClient) {}
  addcourses(data: any) {
    return this.http.post<any>(
      'http://localhost:3000/addcourse',
      'addcourse',
      data
    );
  }
}
