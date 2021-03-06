import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {map, Observable, startWith} from "rxjs";
import {Student} from "../../Model/student";
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {NotificationService} from "../../Services/NotificationService/notification.service";

export interface User {
  name: string;
}

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  registrationForm = this.fb.group({

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


  constructor(private readonly participantsService: ParticipantsService, private readonly studentService: StudentService, private fb: FormBuilder, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

  submit(): void {

    let studentRegisterDto = this.registrationForm.value;
    this.studentService.registerStudent(studentRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    }, () => {
      this.notifyService.showSuccess("Success");
    });

  }

}
