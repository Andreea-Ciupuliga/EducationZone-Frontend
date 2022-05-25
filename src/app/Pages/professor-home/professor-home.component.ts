import { Component, OnInit } from '@angular/core';
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {KeycloakService} from "keycloak-angular";
import {CourseService} from "../../Services/CourseService/course.service";

@Component({
  selector: 'app-professor-home',
  templateUrl: './professor-home.component.html',
  styleUrls: ['./professor-home.component.scss']
})
export class ProfessorHomeComponent implements OnInit {

  public Courses: GetCourseDTO[] = [];
  private professorUsername: string = "";

  constructor(private readonly courseService: CourseService,private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {

    this.getAllCoursesByProfessorUsername();
  }

  getAllCoursesByProfessorUsername() {
    this.professorUsername=this.keycloakService.getUsername();
    this.courseService.getAllCoursesByProfessorUsername(this.professorUsername).subscribe((data: GetCourseDTO[]) => {
      this.Courses = data;
      console.log(this.Courses)
    });
  }
}
