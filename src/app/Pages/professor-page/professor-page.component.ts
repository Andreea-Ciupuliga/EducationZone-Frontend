import { Component, OnInit } from '@angular/core';
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {ProfessorCourseService} from "../../Services/ProfessorCourseService/professor-course.service";

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrls: ['./professor-page.component.scss']
})
export class ProfessorPageComponent implements OnInit {

  public Courses: GetCourseDTO[] = [];
  private professorId: number = 1;


  constructor(private readonly professorCourseService: ProfessorCourseService) {
  }

  ngOnInit(): void {

    this.getAllCoursesByProfessorId();
  }

  getAllCoursesByProfessorId() {
    this.professorCourseService.getAllCoursesByProfessorId(this.professorId).subscribe((data: GetCourseDTO[]) => {         //daca nu scriem .subscribe nu o sa se faca requestul
      this.Courses = data;
      console.log(this.Courses)
    });
  }

}
