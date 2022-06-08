import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentAtCourseComponent } from './register-student-at-course.component';

describe('RegisterStudentAtCourseComponent', () => {
  let component: RegisterStudentAtCourseComponent;
  let fixture: ComponentFixture<RegisterStudentAtCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStudentAtCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentAtCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
