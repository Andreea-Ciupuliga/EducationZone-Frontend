import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Exam} from "../../Model/exam";
import {ExamService} from "../../Services/ExamService/exam.service";

@Component({
  selector: 'app-remove-exam-confirmation-dialog',
  templateUrl: './remove-exam-confirmation-dialog.component.html',
  styleUrls: ['./remove-exam-confirmation-dialog.component.scss']
})
export class RemoveExamConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly examService: ExamService) {
  }

  ngOnInit(): void {
  }

  removeExam() {
    let examId = this.data.examId;
    this.examService.removeExam(examId).subscribe((data: Exam) => {
    });
  }

}
