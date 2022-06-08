import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveGroupFromCourseComponent } from './remove-group-from-course.component';

describe('RemoveGroupFromCourseComponent', () => {
  let component: RemoveGroupFromCourseComponent;
  let fixture: ComponentFixture<RemoveGroupFromCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveGroupFromCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveGroupFromCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
