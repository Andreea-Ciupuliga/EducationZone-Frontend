import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCourseConfirmationDialogComponent } from './remove-course-confirmation-dialog.component';

describe('RemoveCourseConfirmationDialogComponent', () => {
  let component: RemoveCourseConfirmationDialogComponent;
  let fixture: ComponentFixture<RemoveCourseConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCourseConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCourseConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
