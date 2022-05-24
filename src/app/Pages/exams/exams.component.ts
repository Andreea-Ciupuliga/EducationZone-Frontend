import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../Services/ExamService/exam.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  private studentUsername: string = "";
  public Exams: GetExamDTO[] = [];
  constructor(private readonly examService: ExamService,private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.getAllExamsByStudentUsername();
  }
  getAllExamsByStudentUsername() {
    this.studentUsername=this.keycloakService.getUsername();
    this.examService.getAllExamsByStudentUsername(this.studentUsername).subscribe((data: GetExamDTO[]) => {
      this.Exams = data;
      console.log(this.Exams)
    });
  }
}
