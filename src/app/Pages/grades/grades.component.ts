import { Component, OnInit } from '@angular/core';
import {GetGradeDTO} from "../../DTOs/GradeDTOs/get-grade-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  private studentId: number = 9;
  public Grades: GetGradeDTO[] = [];
  constructor(private readonly participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.getAllGradesByStudentId();
  }
  getAllGradesByStudentId() {
    this.participantsService.getAllGradesByStudentId(this.studentId).subscribe((data: GetGradeDTO[]) => {         //daca nu scriem .subscribe nu o sa se faca requestul
      this.Grades = data;
      console.log(this.Grades)
    });
  }

}
