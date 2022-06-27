import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHomeworkConfirmationDialogComponent } from './remove-homework-confirmation-dialog.component';

describe('RemoveHomeworkConfirmationDialogComponent', () => {
  let component: RemoveHomeworkConfirmationDialogComponent;
  let fixture: ComponentFixture<RemoveHomeworkConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveHomeworkConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveHomeworkConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
