import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-update-student-without-student-id',
  templateUrl: './update-student-without-student-id.component.html',
  styleUrls: ['./update-student-without-student-id.component.scss']
})
//fac update la student fara sa scriu de mana id-ul acestuia
export class UpdateStudentWithoutStudentIdComponent implements OnInit {
  registrationForm = this.fb.group({

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

  constructor(public dialogRef: MatDialogRef<UpdateStudentWithoutStudentIdComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private readonly studentService: StudentService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    let studentId = this.data.studentId;
    let studentRegisterDto = this.registrationForm.value;
    this.studentService.updateStudent(studentId, studentRegisterDto).subscribe((data: any) => {
      this.dialogRef.close(studentRegisterDto);
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

}
