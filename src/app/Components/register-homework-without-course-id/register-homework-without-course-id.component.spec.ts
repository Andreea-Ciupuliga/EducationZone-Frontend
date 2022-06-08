import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHomeworkWithoutCourseIdComponent } from './register-homework-without-course-id.component';

describe('RegisterHomeworkWithoutCourseIdComponent', () => {
  let component: RegisterHomeworkWithoutCourseIdComponent;
  let fixture: ComponentFixture<RegisterHomeworkWithoutCourseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHomeworkWithoutCourseIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHomeworkWithoutCourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
