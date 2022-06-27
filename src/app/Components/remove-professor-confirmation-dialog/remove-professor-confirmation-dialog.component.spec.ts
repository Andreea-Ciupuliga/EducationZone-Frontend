import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProfessorConfirmationDialogComponent } from './remove-professor-confirmation-dialog.component';

describe('RemoveProfessorConfirmationDialogComponent', () => {
  let component: RemoveProfessorConfirmationDialogComponent;
  let fixture: ComponentFixture<RemoveProfessorConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProfessorConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProfessorConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
