import { TestBed } from '@angular/core/testing';

import { ProfessorCourseService } from './professor-course.service';

describe('ProfessorCourseService', () => {
  let service: ProfessorCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
