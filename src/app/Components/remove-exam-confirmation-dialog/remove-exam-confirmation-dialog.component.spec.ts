import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveExamConfirmationDialogComponent } from './remove-exam-confirmation-dialog.component';

describe('RemoveExamConfirmationDialogComponent', () => {
  let component: RemoveExamConfirmationDialogComponent;
  let fixture: ComponentFixture<RemoveExamConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveExamConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveExamConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
