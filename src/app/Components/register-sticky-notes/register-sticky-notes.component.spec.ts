import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStickyNotesComponent } from './register-sticky-notes.component';

describe('RegisterStickyNotesComponent', () => {
  let component: RegisterStickyNotesComponent;
  let fixture: ComponentFixture<RegisterStickyNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStickyNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStickyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
