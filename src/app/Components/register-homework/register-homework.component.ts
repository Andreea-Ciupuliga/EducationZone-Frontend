import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {ExamService} from "../../Services/ExamService/exam.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-register-homework',
  templateUrl: './register-homework.component.html',
  styleUrls: ['./register-homework.component.scss']
})
export class RegisterHomeworkComponent implements OnInit {

  registrationForm = this.fb.group({
    description: ['', Validators.required],
    deadline: ['', Validators.required],
    points: ['', Validators.required],
    courseId: ['', Validators.required],
  })

  constructor(private readonly homeworkService: HomeworkService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let homeworkRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.homeworkService.registerHomework(homeworkRegisterDto).subscribe((data: any) => {
    });

  }

}
