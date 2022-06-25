import {Component, OnInit} from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {KeycloakService} from "keycloak-angular";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['courseName', 'deadline', 'points', 'description'];

  public courseName: string;
  private studentUsername: string = "";

  public Homeworks: GetHomeworkDTO[] = [];
  public AllHomeworksByCourseName: GetHomeworkDTO[] = [];

  constructor(private readonly homeworkService: HomeworkService, private keycloakService: KeycloakService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAllHomeworksByStudentUsername();
  }

  getAllHomeworksByStudentUsername() {
    this.studentUsername = this.keycloakService.getUsername();
    this.homeworkService.getAllHomeworksByStudentUsername(this.studentUsername).subscribe((data: GetHomeworkDTO[]) => {
      this.Homeworks = data;
    });
  }

  getAllHomeworksByCourseNameAndStudentUsername(name: string) {
    this.courseName = "";
    this.studentUsername = this.keycloakService.getUsername();

    this.homeworkService.getAllHomeworksByCourseNameAndStudentUsername(name, this.studentUsername).subscribe((data: GetHomeworkDTO[]) => {
      this.AllHomeworksByCourseName = data;
    }, (err) => {
      this.notifyService.showWarning(err.error.message);
    });
  }
}
