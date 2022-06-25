import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ExamService} from "../../Services/ExamService/exam.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-update-exam-without-exam-id',
  templateUrl: './update-exam-without-exam-id.component.html',
  styleUrls: ['./update-exam-without-exam-id.component.scss']
})
//fac update la examen fara sa scriu de mana id-ul acestuia
export class UpdateExamWithoutExamIdComponent implements OnInit {

  registrationForm = this.fb.group({
    description: [null],
    examDate: [null],
    points: [null],
    examRoom: [null],
    examHour: [null],
    courseId: [null]

  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly examService: ExamService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let examRegisterDto = this.registrationForm.value;
    examRegisterDto.courseId = this.data.courseId;
    let examId = this.data.examId;
    this.examService.updateExam(examId, examRegisterDto).subscribe((data: any) => {
    });

  }
}
