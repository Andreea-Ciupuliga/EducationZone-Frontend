import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {ExamService} from "../../Services/ExamService/exam.service";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-register-exam',
  templateUrl: './register-exam.component.html',
  styleUrls: ['./register-exam.component.scss']
})
export class RegisterExamComponent implements OnInit {

  registrationForm = this.fb.group({
    description: [null, Validators.required],
    examDate: [null, Validators.required],
    points: [null, Validators.required],
    examRoom: [null, Validators.required],
    examHour: [null, Validators.required],
    courseId: [null, Validators.required],

  })

  constructor(private readonly examService: ExamService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let examRegisterDto = this.registrationForm.value;

      this.examService.registerExam(examRegisterDto).subscribe((data: any) => {
      });

  }
}
