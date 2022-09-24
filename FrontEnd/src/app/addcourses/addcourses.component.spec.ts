import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursesComponent } from './addcourses.component';

describe('AddcoursesComponent', () => {
  let component: AddCoursesComponent;
  let fixture: ComponentFixture<AddCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCoursesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
