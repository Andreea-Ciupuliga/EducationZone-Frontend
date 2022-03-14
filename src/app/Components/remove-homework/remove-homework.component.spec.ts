import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHomeworkComponent } from './remove-homework.component';

describe('RemoveHomeworkComponent', () => {
  let component: RemoveHomeworkComponent;
  let fixture: ComponentFixture<RemoveHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
