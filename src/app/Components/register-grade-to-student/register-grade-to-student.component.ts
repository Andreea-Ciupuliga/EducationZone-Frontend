import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {Participants} from "../../Models/participants";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";

@Component({
  selector: 'app-register-grade-to-student',
  templateUrl: './register-grade-to-student.component.html',
  styleUrls: ['./register-grade-to-student.component.scss']
})
export class RegisterGradeToStudentComponent implements OnInit {
  registrationForm = this.fb.group({
    grade: ['', Validators.required],
  })

  constructor(private readonly participantsService: ParticipantsService, @Inject(MAT_DIALOG_DATA) public data: any, private notifyService: NotificationService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addGradeForStudent() {

    let courseId = this.data.courseId;
    let studentId = this.data.studentId;
    let courseGrade = this.registrationForm.value.grade;
    this.participantsService.addGradeForStudent(studentId, courseId, courseGrade).subscribe((data: Participants) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

}
