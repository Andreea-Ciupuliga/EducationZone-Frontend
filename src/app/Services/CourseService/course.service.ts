import { Injectable } from '@angular/core';
import {ApiService} from "../Api/api.service";
import {RegisterCourseDTO} from "../../DTOs/CourseDTOs/register-course-dto";
import {Course} from "../../Models/course";
import {Student} from "../../Models/student";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly endpoint = '/course';
  constructor(private apiService : ApiService) { }

  registerCourse(courseRegisterDTO: RegisterCourseDTO) {
    return this.apiService.post<Course>(this.endpoint + '/register',courseRegisterDTO);
  }

  removeCourse(id: number){
    return this.apiService.delete(this.endpoint+'/'+id);
  }

  getCourse(id: number){
    return this.apiService.get<Course>(this.endpoint + '/'+id);
  }

  getAllCourses(){
    return this.apiService.get<Course>(this.endpoint + '/getAll');
  }

  updateCourse(id: number,courseRegisterDTO: RegisterCourseDTO){
    return this.apiService.put<Course>(this.endpoint + '/'+id,courseRegisterDTO);
  }
  getAllCoursesByName(courseName:string){
    return this.apiService.get<Course>(this.endpoint + '/getAllByName/'+courseName);
  }


  // removeAllCourses(){
  //   return this.apiService.delete(this.endpoint+'/deleteAll');
  // }
}
