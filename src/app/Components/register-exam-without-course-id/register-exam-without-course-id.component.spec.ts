import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExamWithoutCourseIdComponent } from './register-exam-without-course-id.component';

describe('RegisterExamWithoutCourseIdComponent', () => {
  let component: RegisterExamWithoutCourseIdComponent;
  let fixture: ComponentFixture<RegisterExamWithoutCourseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterExamWithoutCourseIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterExamWithoutCourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
