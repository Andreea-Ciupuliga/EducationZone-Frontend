import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGroupAtCourseComponent } from './register-group-at-course.component';

describe('RegisterGroupAtCourseComponent', () => {
  let component: RegisterGroupAtCourseComponent;
  let fixture: ComponentFixture<RegisterGroupAtCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGroupAtCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGroupAtCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
