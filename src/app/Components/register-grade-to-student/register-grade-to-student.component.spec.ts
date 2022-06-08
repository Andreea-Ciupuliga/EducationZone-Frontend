import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGradeToStudentComponent } from './register-grade-to-student.component';

describe('RegisterGradeToStudentComponent', () => {
  let component: RegisterGradeToStudentComponent;
  let fixture: ComponentFixture<RegisterGradeToStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGradeToStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGradeToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
