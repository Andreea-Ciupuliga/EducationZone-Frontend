import {Injectable} from '@angular/core';
import {ApiService} from "../Api/api.service";
import {RegisterExamDTO} from "../../DTOs/ExamDTOs/register-exam-dto";
import {Exam} from "../../Model/exam";
import {Student} from "../../Model/student";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private readonly endpoint = '/exam';

  constructor(private apiService: ApiService) {
  }

  registerExam(examRegisterDTO: RegisterExamDTO) {
    return this.apiService.post<Exam>(this.endpoint + '/register', examRegisterDTO);
  }

  removeExam(id: number) {
    return this.apiService.delete(this.endpoint + '/' + id);
  }

  updateExam(id: number, examRegisterDTO: RegisterExamDTO) {
    return this.apiService.put<Exam>(this.endpoint + '/' + id, examRegisterDTO);
  }

  updateExamByCourseId(examRegisterDTO: RegisterExamDTO) {
    return this.apiService.put<Exam>(this.endpoint + '/updateExamByCourseId/', examRegisterDTO);
  }

  getAllExams() {
    return this.apiService.get<Exam>(this.endpoint + '/getAll');
  }

  getExamByCourseId(id: number) {
    return this.apiService.get<Exam>(this.endpoint + '/getByCourseId/' + id);
  }

  getAllExamsByStudentId(id: number) {
    return this.apiService.get<Exam>(this.endpoint + '/getAllByStudentId/' + id);
  }

  getAllExamsByStudentUsername(username: string) {
    return this.apiService.get<Exam>(this.endpoint + '/getAllExamsByStudentUsername/' + username);
  }

  getExam(id: number) {
    return this.apiService.get<Exam>(this.endpoint + '/' + id);
  }

  getAllExamsByCourseNameAndStudentUsername(courseName: string, username: string) {
    return this.apiService.get<Exam>(this.endpoint + '/getAllExamsByCourseNameAndStudentUsername/' + courseName + '/' + username);
  }

}
