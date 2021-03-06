import {Injectable} from '@angular/core';
import {ApiService} from "../Api/api.service";
import {RegisterCourseDTO} from "../../DTOs/CourseDTOs/register-course-dto";
import {Course} from "../../Model/course";


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly endpoint = '/course';

  constructor(private apiService: ApiService) {
  }

  registerCourse(courseRegisterDTO: RegisterCourseDTO) {
    return this.apiService.post<Course>(this.endpoint + '/register', courseRegisterDTO);
  }

  removeCourse(id: number) {
    return this.apiService.delete(this.endpoint + '/' + id);
  }

  getCourse(id: number) {
    return this.apiService.get<Course>(this.endpoint + '/' + id);
  }

  getAllCourses() {
    return this.apiService.get<Course>(this.endpoint + '/getAll');
  }

  updateCourse(id: number, courseRegisterDTO: RegisterCourseDTO) {
    return this.apiService.put<Course>(this.endpoint + '/' + id, courseRegisterDTO);
  }

  getAllCoursesByName(courseName: string) {
    return this.apiService.get<Course>(this.endpoint + '/getAllByName/' + courseName);
  }

  getAllCoursesByProfessorId(professorId: number) {
    return this.apiService.get<Course>(this.endpoint + '/getAllCoursesByProfessorId/' + professorId)
  }

  getAllCoursesByProfessorUsername(professorUsername: string) {
    return this.apiService.get<Course>(this.endpoint + '/getAllCoursesByProfessorUsername/' + professorUsername)
  }

  checkIfTheTeacherIsTeachingTheCourse(courseId: number, professorUsername: string) {
    return this.apiService.get<Boolean>(this.endpoint + '/checkIfTheTeacherIsTeachingTheCourse/' + courseId + '/' + professorUsername);
  }
}
