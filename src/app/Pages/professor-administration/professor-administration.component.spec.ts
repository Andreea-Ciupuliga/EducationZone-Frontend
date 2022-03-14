import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAdministrationComponent } from './professor-administration.component';

describe('ProfessorAdministrationComponent', () => {
  let component: ProfessorAdministrationComponent;
  let fixture: ComponentFixture<ProfessorAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
