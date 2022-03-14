import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  registrationForm = this.fb.group({

    id: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    username: ['', Validators.required],
    groupNumber: ['', Validators.required],
    phone: ['', Validators.required],
    year: ['', Validators.required],
    department: ['', Validators.required],
  })
  constructor(private fb: FormBuilder,private readonly studentService:StudentService) { }

  ngOnInit(): void {
  }

  submit(): void {
    let studentId = this.registrationForm.value.id;
    let studentRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.studentService.updateStudent(studentId,studentRegisterDto).subscribe((data: any) => {
    });

  }

}
