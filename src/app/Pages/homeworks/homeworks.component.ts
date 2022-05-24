import { Component, OnInit } from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {
  private studentUsername: string = "";
  public Homeworks: GetHomeworkDTO[] = [];
  constructor(private readonly homeworkService:HomeworkService,private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.getAllHomeworksByStudentUsername();
  }
  getAllHomeworksByStudentUsername(){
    this.studentUsername=this.keycloakService.getUsername();
    this.homeworkService.getAllHomeworksByStudentUsername(this.studentUsername).subscribe((data: GetHomeworkDTO[]) => {
      this.Homeworks = data;
      console.log(this.Homeworks)
    });
  }
}
