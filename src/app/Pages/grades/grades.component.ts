import { Component, OnInit } from '@angular/core';
import {GetGradeDTO} from "../../DTOs/GradeDTOs/get-grade-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  private studentUsername: string = "";
  public Grades: GetGradeDTO[] = [];
  constructor(private readonly participantsService: ParticipantsService,private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.getAllGradesByStudentUsername();
  }
  getAllGradesByStudentUsername() {
    this.studentUsername=this.keycloakService.getUsername();
    this.participantsService.getAllGradesByStudentUsername(this.studentUsername).subscribe((data: GetGradeDTO[]) => {
      this.Grades = data;
      console.log(this.Grades)
    });
  }

}
