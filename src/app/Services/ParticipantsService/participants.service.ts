import {Injectable} from '@angular/core';
import {ApiService} from "../Api/api.service";
import {Participants} from "../../Models/participants";

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private readonly endpoint = '/participants';

  constructor(private apiService: ApiService) {
  }

  registerStudentAtCourse(studentId: number, courseId: number) {
    return this.apiService.post<Participants>(this.endpoint + '/register/' + studentId + '/' + courseId);
  }

  addGradeForStudent(studentId: number, courseId: number, courseGrade: String) {
    return this.apiService.put<Participants>(this.endpoint + '/addGradeForStudent/' + studentId + '/' + courseId + '/' + courseGrade);
  }

  getAllCoursesByStudentId(studentId: number) {
    return this.apiService.get<Participants>(this.endpoint + '/getAllCoursesByStudentId/' + studentId)
  }

  getAllCoursesByStudentUsername(studentUsername: string) {
    return this.apiService.get<Participants>(this.endpoint + '/getAllCoursesByStudentUsername/' + studentUsername)
  }

  getAllGradesByStudentId(studentId: number) {
    return this.apiService.get<Participants>(this.endpoint + '/getAllGradesByStudentId/' + studentId)
  }

  getAllGradesByStudentUsername(studentUsername: string){
    return this.apiService.get<Participants>(this.endpoint + '/getAllGradesByStudentUsername/' + studentUsername)
  }

  getAllStudentsByCourseId(courseId: number) {
    return this.apiService.get<Participants>(this.endpoint + '/getAllStudentsByCourseId/' + courseId)
  }

  removeStudentCourseRelationship(studentId: number, courseId: number) {
    return this.apiService.delete(this.endpoint + '/' + studentId + '/' + courseId);
  }

}
