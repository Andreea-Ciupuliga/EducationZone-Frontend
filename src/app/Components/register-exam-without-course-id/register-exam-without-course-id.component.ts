import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ExamService} from "../../Services/ExamService/exam.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-register-exam-without-course-id',
  templateUrl: './register-exam-without-course-id.component.html',
  styleUrls: ['./register-exam-without-course-id.component.scss']
})

//inregistrez examen fara sa mai scriu de mana id-ul cursului de care apartine
export class RegisterExamWithoutCourseIdComponent implements OnInit {

  registrationForm = this.fb.group({
    description: ['', Validators.required],
    examDate: ['', Validators.required],
    points: ['', Validators.required],
    examRoom: ['', Validators.required],
    examHour: ['', Validators.required],
    courseId: ['', Validators.required],

  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly examService: ExamService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let examRegisterDto = this.registrationForm.value;
    examRegisterDto.courseId = this.data.courseId;
    this.examService.registerExam(examRegisterDto).subscribe((data: any) => {
    });

  }

}
