import {Injectable} from '@angular/core';
import {ApiService} from "../Api/api.service";
import {RegisterStudentDTO} from "../../DTOs/StudentDTOs/register-student-dto";
import {Student} from "../../Model/student";


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly endpoint = '/student';

  constructor(private apiService: ApiService) {
  }

  registerStudent(studentRegisterDTO: RegisterStudentDTO) {
    return this.apiService.post<Student>(this.endpoint + '/register', studentRegisterDTO);
  }

  removeStudent(id: number) {
    return this.apiService.delete(this.endpoint + '/' + id);
  }

  removeAllStudents() {
    return this.apiService.delete(this.endpoint + '/deleteAll');
  }

  getStudent(id: number) {
    return this.apiService.get<Student>(this.endpoint + '/' + id);
  }

  getStudentByUsername(username: String) {
    return this.apiService.get<Student>(this.endpoint + '/getStudentByUsername/' + username);
  }

  getAllStudents() {
    return this.apiService.get<Student>(this.endpoint + '/getAll');
  }

  getAllStudentsByName(studentName: string) {
    return this.apiService.get<Student>(this.endpoint + '/getAllByName/' + studentName);
  }

  updateStudent(id: number, studentRegisterDTO: RegisterStudentDTO) {
    return this.apiService.put<Student>(this.endpoint + '/' + id, studentRegisterDTO);
  }
}
