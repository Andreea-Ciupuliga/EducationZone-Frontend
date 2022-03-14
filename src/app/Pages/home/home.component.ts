import {Component, OnInit} from '@angular/core';
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {Course} from "../../Models/course";
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public Courses: GetCourseDTO[] = [];
  private studentId: number = 9;


  constructor(private readonly participantsService: ParticipantsService) {
  }

  ngOnInit(): void {

    this.getAllCoursesByStudentId();
  }

  getAllCoursesByStudentId() {
    this.participantsService.getAllCoursesByStudentId(this.studentId).subscribe((data: GetCourseDTO[]) => {         //daca nu scriem .subscribe nu o sa se faca requestul
      this.Courses = data;
      console.log(this.Courses)
    });
  }

}
