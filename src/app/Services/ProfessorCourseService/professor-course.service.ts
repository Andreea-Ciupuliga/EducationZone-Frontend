import {Injectable} from '@angular/core';
import {ApiService} from "../Api/api.service";
import {ProfessorCourse} from "../../Models/professor-course";

@Injectable({
  providedIn: 'root'
})
export class ProfessorCourseService {

  private readonly endpoint = '/professorCourse';

  constructor(private apiService: ApiService) {
  }

  //nu stiu daca merge????
  registerProfessorToCourse(professorId: number, courseId: number) {
    return this.apiService.post<ProfessorCourse>(this.endpoint + '/register/' + professorId + '/' + courseId);
  }

  getAllCoursesByProfessorId(professorId: number) {
    return this.apiService.get<ProfessorCourse>(this.endpoint + '/getAllCoursesByProfessorId/' + professorId)
  }

  getAllProfessorsByCourseId(courseId: number) {
    return this.apiService.get<ProfessorCourse>(this.endpoint + '/getAllProfessorsByCourseId/' + courseId)
  }

  removeCourseProfessorRelationship(professorId: number, courseId: number) {
    return this.apiService.delete(this.endpoint + '/' + professorId + '/' + courseId);
  }
}
