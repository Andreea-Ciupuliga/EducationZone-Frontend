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
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.email],
    password: [null, Validators.required],
    username: [null, Validators.required],
    groupNumber: [null, Validators.required],
    phone: [null, Validators.required],
    year: [null, Validators.required],
    department: [null, Validators.required],
  })

  constructor(private fb: FormBuilder, private readonly studentService: StudentService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    let studentId = this.registrationForm.value.id;
    let studentRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.studentService.updateStudent(studentId, studentRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

}
