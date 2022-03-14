import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ExamService} from "../../Services/ExamService/exam.service";

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.scss']
})
export class UpdateExamComponent implements OnInit {
  registrationForm = this.fb.group({
    id: ['', Validators.required],
    description: ['', Validators.required],
    examDate: ['', Validators.required],
    points: ['', Validators.required],
    courseId: ['', Validators.required],

  })
  constructor(private readonly examService:ExamService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  submit(): void {
    let examId = this.registrationForm.value.id;
    let examRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.examService.updateExam(examId,examRegisterDto).subscribe((data: any) => {
    });

  }
}
