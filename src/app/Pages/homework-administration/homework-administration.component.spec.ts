import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkAdministrationComponent } from './homework-administration.component';

describe('HomeworkAdministrationComponent', () => {
  let component: HomeworkAdministrationComponent;
  let fixture: ComponentFixture<HomeworkAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
