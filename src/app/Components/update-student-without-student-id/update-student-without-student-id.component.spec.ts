import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentWithoutStudentIdComponent } from './update-student-without-student-id.component';

describe('UpdateStudentWithoutStudentIdComponent', () => {
  let component: UpdateStudentWithoutStudentIdComponent;
  let fixture: ComponentFixture<UpdateStudentWithoutStudentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentWithoutStudentIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentWithoutStudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
