import { Component, OnInit } from '@angular/core';
import { CourseserviceService } from '../courseservice.service';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css'],
})
export class AddCoursesComponent implements OnInit {
  course = {
    title: '',
    desc: '',
    date: '',
    venue: '',
    duration: '',
  };
  constructor(private courseservice: CourseserviceService) {}

  ngOnInit(): void {}

  addcourse_f() {
    console.log(this.course);
    this.courseservice.addcourses(this.course).subscribe(
      (res) => {
        alert('Course Successfully added!!!');
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addCourses() {
    console.log(this.course);
  }
}
