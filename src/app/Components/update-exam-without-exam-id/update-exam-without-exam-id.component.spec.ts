import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExamWithoutExamIdComponent } from './update-exam-without-exam-id.component';

describe('UpdateExamWithoutCourseIdComponent', () => {
  let component: UpdateExamWithoutExamIdComponent;
  let fixture: ComponentFixture<UpdateExamWithoutExamIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExamWithoutExamIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamWithoutExamIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
