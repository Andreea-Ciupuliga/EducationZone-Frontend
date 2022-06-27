import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStudentConfirmationDialogComponent } from './remove-student-confirmation-dialog.component';

describe('RemoveStudentConfirmationDialogComponent', () => {
  let component: RemoveStudentConfirmationDialogComponent;
  let fixture: ComponentFixture<RemoveStudentConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveStudentConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStudentConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
