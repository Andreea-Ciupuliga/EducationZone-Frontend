import { Component, OnInit } from '@angular/core';
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {CourseService} from "../../Services/CourseService/course.service";

@Component({
  selector: 'app-get-course',
  templateUrl: './get-course.component.html',
  styleUrls: ['./get-course.component.scss']
})
export class GetCourseComponent implements OnInit {

  public courseName:string;
  public courseId:any;
  panelOpenState = false;
  public CoursesByName : GetCourseDTO[]=[];
  public AllCourses : GetCourseDTO[]=[];
  public course: GetCourseDTO;

  constructor(private readonly courseService: CourseService) {

  }

  ngOnInit(): void {

  }

  getAllCoursesByName(name:string){
    this.courseName="";
    this.courseService.getAllCoursesByName(name).subscribe((data: GetCourseDTO[]) => {
      this.CoursesByName=data;
    });
  }

  getCourse(id: number){
    this.courseId = "";
    this.courseService.getCourse(id).subscribe((data: GetCourseDTO) => {
      this.course=data;
    });
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe((data: GetCourseDTO[]) => {
      this.AllCourses=data;
    });
  }

}
