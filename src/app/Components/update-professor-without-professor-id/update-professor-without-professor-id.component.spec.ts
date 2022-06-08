import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfessorWithoutProfessorIdComponent } from './update-professor-without-professor-id.component';

describe('UpdateProfessorWithoutProfessorIdComponent', () => {
  let component: UpdateProfessorWithoutProfessorIdComponent;
  let fixture: ComponentFixture<UpdateProfessorWithoutProfessorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfessorWithoutProfessorIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfessorWithoutProfessorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
