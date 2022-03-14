import { Injectable } from '@angular/core';
import {ApiService} from "../Api/api.service";
import {Participants} from "../../Models/participants";

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private readonly endpoint = '/participants';
  constructor(private apiService : ApiService) { }

  //nu stiu daca merge????
  registerStudentAtCourse(studentId:number,courseId:number) {
    return this.apiService.post<Participants>(this.endpoint + '/register/'+studentId+'/'+courseId);
  }

  getAllCoursesByStudentId(studentId:number){
    return this.apiService.get<Participants>(this.endpoint + '/getAllCoursesByStudentId/'+studentId)
  }

}
