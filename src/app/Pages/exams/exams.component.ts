import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../Services/ExamService/exam.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  private studentId: number = 9;
  public Exams: GetExamDTO[] = [];
  constructor(private readonly examService: ExamService) { }

  ngOnInit(): void {
    this.getAllExamsByStudentId();
  }
  getAllExamsByStudentId() {
    this.examService.getAllExamsByStudentId(this.studentId).subscribe((data: GetExamDTO[]) => {         //daca nu scriem .subscribe nu o sa se faca requestul
      this.Exams = data;
      console.log(this.Exams)
    });
  }
}
