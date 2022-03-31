import { Injectable } from '@angular/core';
import {ApiService} from "../Api/api.service";
import {RegisterProfessorDTO} from "../../DTOs/ProfessorDTOs/register-professor-dto";
import {Professor} from "../../Models/professor";
import {RegisterCourseDTO} from "../../DTOs/CourseDTOs/register-course-dto";
import {Course} from "../../Models/course";
import {Student} from "../../Models/student";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private readonly endpoint = '/professor';
  constructor(private apiService : ApiService) { }

  registerProfessor(professorRegisterDTO: RegisterProfessorDTO) {
    return this.apiService.post<Professor>(this.endpoint + '/register',professorRegisterDTO);
  }

  removeProfessor(id: number){
    return this.apiService.delete(this.endpoint+'/'+id);
  }

  removeAllProfessors(){
    return this.apiService.delete(this.endpoint+'/deleteAll');
  }

  getProfessor(id: number){
    return this.apiService.get<Professor>(this.endpoint + '/'+id);
  }

  getAllProfessors(){
    return this.apiService.get<Professor>(this.endpoint + '/getAll');
  }

  updateProfessor(id: number,professorRegisterDTO: RegisterProfessorDTO){
    return this.apiService.put<Professor>(this.endpoint + '/'+id,professorRegisterDTO);
  }

  getAllProfessorsByName(professorName:string){
    return this.apiService.get<Professor>(this.endpoint + '/getAllByName/'+professorName);
  }
}
