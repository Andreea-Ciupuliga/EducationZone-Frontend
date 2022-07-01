import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  registrationForm = this.fb.group({

    id: [null, Validators.required],
    firstName: [null],
    lastName: [null],
    email: [null],
    password: [null],
    username: [null],
    groupNumber: [null],
    phone: [null],
    year: [null],
    department: [null],
  })

  constructor(private fb: FormBuilder, private readonly studentService: StudentService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    let studentId = this.registrationForm.value.id;

    if (studentId == null)
      throw this.notifyService.showError("Student id is required");

    let studentRegisterDto = this.registrationForm.value;

    this.studentService.updateStudent(studentId, studentRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    },()=>{
      this.notifyService.showSuccess("Success");
    });

  }

}
