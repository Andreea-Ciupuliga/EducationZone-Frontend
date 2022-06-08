import {Injectable} from '@angular/core';
import {ApiService} from "../Api/api.service";
import {RegisterProfessorDTO} from "../../DTOs/ProfessorDTOs/register-professor-dto";
import {Professor} from "../../Models/professor";


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private readonly endpoint = '/professor';

  constructor(private apiService: ApiService) {
  }

  registerProfessor(professorRegisterDTO: RegisterProfessorDTO) {
    return this.apiService.post<Professor>(this.endpoint + '/register', professorRegisterDTO);
  }

  removeProfessor(id: number) {
    return this.apiService.delete(this.endpoint + '/' + id);
  }

  getProfessor(id: number) {
    return this.apiService.get<Professor>(this.endpoint + '/' + id);
  }

  removeAllProfessors() {
    return this.apiService.delete(this.endpoint + '/deleteAll');
  }

  getProfessorByUsername(username: String) {
    return this.apiService.get<Professor>(this.endpoint + '/getProfessorByUsername/' + username);
  }

  getAllProfessors() {
    return this.apiService.get<Professor>(this.endpoint + '/getAll');
  }

  updateProfessor(id: number, professorRegisterDTO: RegisterProfessorDTO) {
    return this.apiService.put<Professor>(this.endpoint + '/' + id, professorRegisterDTO);
  }

  getAllProfessorsByName(professorName: string) {
    return this.apiService.get<Professor>(this.endpoint + '/getAllByName/' + professorName);
  }

  getProfessorByCourseId(courseId: number) {
    return this.apiService.get<Professor>(this.endpoint + '/getProfessorByCourseId/' + courseId)
  }
}
