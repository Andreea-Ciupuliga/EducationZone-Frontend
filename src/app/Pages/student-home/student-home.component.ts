import {Component, OnInit} from '@angular/core';
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  public Courses: GetCourseDTO[] = [];
  private studentUsername: string = "";

  constructor(private readonly participantsService: ParticipantsService, private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.getAllCoursesByStudentUsername();
  }

  getAllCoursesByStudentUsername() {
    this.studentUsername = this.keycloakService.getUsername();
    this.participantsService.getAllCoursesByStudentUsername(this.studentUsername).subscribe((data: GetCourseDTO[]) => {
      this.Courses = data;
    });
  }

}
