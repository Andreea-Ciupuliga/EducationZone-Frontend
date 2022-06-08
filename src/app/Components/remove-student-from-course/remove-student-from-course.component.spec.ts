import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStudentFromCourseComponent } from './remove-student-from-course.component';

describe('RemoveStudentFromCourseComponent', () => {
  let component: RemoveStudentFromCourseComponent;
  let fixture: ComponentFixture<RemoveStudentFromCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveStudentFromCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStudentFromCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
