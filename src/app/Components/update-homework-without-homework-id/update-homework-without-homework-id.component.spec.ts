import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHomeworkWithoutHomeworkIdComponent } from './update-homework-without-homework-id.component';

describe('UpdateHomeworkWithoutHomeowrkIdComponent', () => {
  let component: UpdateHomeworkWithoutHomeworkIdComponent;
  let fixture: ComponentFixture<UpdateHomeworkWithoutHomeworkIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHomeworkWithoutHomeworkIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHomeworkWithoutHomeworkIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
