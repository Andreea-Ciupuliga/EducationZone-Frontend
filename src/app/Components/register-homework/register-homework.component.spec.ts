import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHomeworkComponent } from './register-homework.component';

describe('RegisterHomeworkComponent', () => {
  let component: RegisterHomeworkComponent;
  let fixture: ComponentFixture<RegisterHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
