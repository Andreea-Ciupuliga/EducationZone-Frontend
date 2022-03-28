import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProfessorComponent } from './get-professor.component';

describe('GetProfessorComponent', () => {
  let component: GetProfessorComponent;
  let fixture: ComponentFixture<GetProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
