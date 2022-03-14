import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";

@Component({
  selector: 'app-register-homework',
  templateUrl: './register-homework.component.html',
  styleUrls: ['./register-homework.component.scss']
})
export class RegisterHomeworkComponent implements OnInit {

  registrationForm = this.fb.group({
    //scriem proprietatile pe care o sa le folosim

    description: ['', Validators.required],
    deadline: ['', Validators.required],
    points: ['', Validators.required],
    courseId: ['', Validators.required],

  })

  constructor(private readonly homeworkService: HomeworkService, private fb: FormBuilder) {
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
