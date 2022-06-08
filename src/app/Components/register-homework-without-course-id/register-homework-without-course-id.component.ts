import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-register-homework-without-course-id',
  templateUrl: './register-homework-without-course-id.component.html',
  styleUrls: ['./register-homework-without-course-id.component.scss']
})

//inregistrez tema fara sa mai scriu de mana id-ul cursului de care apartine
export class RegisterHomeworkWithoutCourseIdComponent implements OnInit {

  registrationForm = this.fb.group({
    description: ['', Validators.required],
    deadline: ['', Validators.required],
    points: ['', Validators.required],
    courseId: ['', Validators.required],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly homeworkService: HomeworkService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let homeworkRegisterDto = this.registrationForm.value;
    homeworkRegisterDto.courseId=this.data.courseId;
    this.homeworkService.registerHomework(homeworkRegisterDto).subscribe((data: any) => {
    });

  }
}
