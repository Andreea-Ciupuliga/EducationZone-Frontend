import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../Services/ExamService/exam.service";
import {Exam} from "../../Models/exam";

@Component({
  selector: 'app-remove-exam',
  templateUrl: './remove-exam.component.html',
  styleUrls: ['./remove-exam.component.scss']
})
export class RemoveExamComponent implements OnInit {

  constructor(private readonly examService: ExamService) {
  }

  public examId: any;

  ngOnInit(): void {
  }

  removeExam(id: number) {
    this.examId = "";
    this.examService.removeExam(id).subscribe((data: Exam) => {
    });
  }

}
