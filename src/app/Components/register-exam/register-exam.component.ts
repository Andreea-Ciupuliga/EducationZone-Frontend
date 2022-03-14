import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {ExamService} from "../../Services/ExamService/exam.service";

@Component({
  selector: 'app-register-exam',
  templateUrl: './register-exam.component.html',
  styleUrls: ['./register-exam.component.scss']
})
export class RegisterExamComponent implements OnInit {

  registrationForm = this.fb.group({
    //scriem proprietatile pe care o sa le folosim

    description: ['', Validators.required],
    examDate: ['', Validators.required],
    points: ['', Validators.required],
    courseId: ['', Validators.required],

  })

  constructor(private readonly examService: ExamService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let examRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.examService.registerExam(examRegisterDto).subscribe((data: any) => {
    });

  }
}
