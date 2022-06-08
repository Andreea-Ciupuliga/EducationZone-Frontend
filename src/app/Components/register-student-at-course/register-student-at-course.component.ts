import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-register-student-at-course',
  templateUrl: './register-student-at-course.component.html',
  styleUrls: ['./register-student-at-course.component.scss']
})
export class RegisterStudentAtCourseComponent implements OnInit {
  registrationStudentAtCourseForm = this.fb.group({

    studentId: ['', Validators.required],
    courseId: ['', Validators.required]
  })

  constructor(private readonly participantsService: ParticipantsService, private notifyService: NotificationService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  registerStudentAtCourse(): void {
    let studentId = this.registrationStudentAtCourseForm.value.studentId;
    let courseId = this.registrationStudentAtCourseForm.value.courseId;
    this.registrationStudentAtCourseForm.reset();
    this.participantsService.registerStudentAtCourse(studentId, courseId).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }
}
