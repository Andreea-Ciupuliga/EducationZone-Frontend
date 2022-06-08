import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCourseWithoutCourseIdComponent } from './update-course-without-course-id.component';

describe('UpdateCourseWithoutCourseIdComponent', () => {
  let component: UpdateCourseWithoutCourseIdComponent;
  let fixture: ComponentFixture<UpdateCourseWithoutCourseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCourseWithoutCourseIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCourseWithoutCourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
