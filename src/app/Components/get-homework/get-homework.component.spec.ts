import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHomeworkComponent } from './get-homework.component';

describe('GetHomeworkComponent', () => {
  let component: GetHomeworkComponent;
  let fixture: ComponentFixture<GetHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
