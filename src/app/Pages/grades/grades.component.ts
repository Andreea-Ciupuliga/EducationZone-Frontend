import {Component, OnInit} from '@angular/core';
import {GetGradeDTO} from "../../DTOs/GradeDTOs/get-grade-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {KeycloakService} from "keycloak-angular";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  displayedColumns: string[] = ['courseName', 'courseGrade'];
  panelOpenState = false;

  public courseName: string;
  private studentUsername: string = "";

  public Grades: GetGradeDTO[] = [];
  public AllGradesByCourseName: GetGradeDTO[] = [];

  constructor(private readonly participantsService: ParticipantsService, private keycloakService: KeycloakService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAllGradesByStudentUsername();
  }

  getAllGradesByStudentUsername() {
    this.studentUsername = this.keycloakService.getUsername();
    this.participantsService.getAllGradesByStudentUsername(this.studentUsername).subscribe((data: GetGradeDTO[]) => {
      this.Grades = data;
    });
  }

  getAllGradesByCourseNameAndStudentUsername(name: string) {
    this.courseName = "";
    this.studentUsername = this.keycloakService.getUsername();

    this.participantsService.getAllGradesByCourseNameAndStudentUsername(name, this.studentUsername).subscribe((data: GetGradeDTO[]) => {
      this.AllGradesByCourseName = data;
    }, (err) => {
      this.notifyService.showWarning(err.error.message);
      this.AllGradesByCourseName = [];
    });
  }

}
