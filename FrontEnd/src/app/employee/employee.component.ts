import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Course } from '../employee.model';
import { CourseserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  courseForm: FormGroup;
  showModal: boolean = false;
  editMode: boolean = false;

  courses: Course[];

  constructor(
    private fb: FormBuilder,
    private couService: CourseserviceService
  ) {}

  ngOnInit(): void {
    this.getCourses();
    this.courseForm = this.fb.group({
      _id: '',
      cname: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-z]+[. ]?[A-Za-z .]*')],
      ],
      cduration: ['', [Validators.required]],
      cvenue: ['', [Validators.required]],
    });
  }

  getCourses() {
    this.couService.getCourseList().subscribe((res: Course[]) => {
      console.log(res);
      this.courses = res;
    });
  }

  onEditCourse(cou: Course) {
    this.editMode = true;
    this.showModal = true;
    this.courseForm.patchValue(cou);
  }

  onCourseSubmit() {
    if (this.courseForm.valid) {
      if (this.editMode) {
        this.couService.updateCourse(this.courseForm.value).subscribe(
          (res) => {
            this.getCourses();
            this.onCloseModal();
            alert('Course Details successfully updated!!!');
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.couService.addCourse(this.courseForm.value).subscribe(
          (res) => {
            console.log(this.courseForm.value);
            this.getCourses();
            this.onCloseModal();
            alert('Course Details successfully added!!!');
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  onAddCourse() {
    this.showModal = true;
  }

  onCloseModal() {
    this.courseForm.reset();
    this.showModal = false;
  }

  onDeleteCourse(id: any) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.couService.deleteCourse(id).subscribe(
        (res) => {
          console.log(res);
          this.getCourses();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
