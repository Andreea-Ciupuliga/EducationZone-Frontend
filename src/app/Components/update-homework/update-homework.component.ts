import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ExamService} from "../../Services/ExamService/exam.service";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";

@Component({
  selector: 'app-update-homework',
  templateUrl: './update-homework.component.html',
  styleUrls: ['./update-homework.component.scss']
})
export class UpdateHomeworkComponent implements OnInit {
  registrationForm = this.fb.group({
    id: ['', Validators.required],
    description: ['', Validators.required],
    deadline: ['', Validators.required],
    points: ['', Validators.required],
    courseId: ['', Validators.required],

  })
  constructor(private readonly homeworkService:HomeworkService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  submit(): void {
    let homeworkId = this.registrationForm.value.id;
    let homeworkRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.homeworkService.updateHomework(homeworkId,homeworkRegisterDto).subscribe((data: any) => {
    });

  }
}
