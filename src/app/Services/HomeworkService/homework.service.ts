import {Injectable} from '@angular/core';
import {ApiService} from "../Api/api.service";
import {RegisterHomeworkDTO} from "../../DTOs/HomeworkDTOs/register-homework-dto";
import {Homework} from "../../Model/homework";

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  private readonly endpoint = '/homework';

  constructor(private apiService: ApiService) {
  }

  registerHomework(homeworkRegisterDTO: RegisterHomeworkDTO) {
    return this.apiService.post<Homework>(this.endpoint + '/register', homeworkRegisterDTO);
  }

  removeHomework(id: number) {
    return this.apiService.delete(this.endpoint + '/' + id);
  }

  getHomework(id: number) {
    return this.apiService.get<Homework>(this.endpoint + '/' + id);
  }

  getAllHomeworksByCourseId(id: number) {
    return this.apiService.get<Homework>(this.endpoint + '/getAllByCourseId/' + id);
  }

  getAllHomeworksByStudentId(id: number) {
    return this.apiService.get<Homework>(this.endpoint + '/getAllByStudentId/' + id);
  }

  getAllHomeworksByStudentUsername(username: string) {
    return this.apiService.get<Homework>(this.endpoint + '/getAllByStudentUsername/' + username);
  }

  getAllHomeworksByCourseNameAndStudentUsername(courseName: string, username: string) {
    return this.apiService.get<Homework>(this.endpoint + '/getAllHomeworksByCourseNameAndStudentUsername/' + courseName + '/' + username);
  }

  updateHomework(id: number, homeworkRegisterDTO: RegisterHomeworkDTO) {
    return this.apiService.put<Homework>(this.endpoint + '/' + id, homeworkRegisterDTO);
  }

  getAllHomeworks() {
    return this.apiService.get<Homework>(this.endpoint + '/getAll');
  }
}
