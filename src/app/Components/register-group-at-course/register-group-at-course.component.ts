import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-register-group-at-course',
  templateUrl: './register-group-at-course.component.html',
  styleUrls: ['./register-group-at-course.component.scss']
})
export class RegisterGroupAtCourseComponent implements OnInit {

  constructor(private readonly participantsService: ParticipantsService,private notifyService: NotificationService,private fb: FormBuilder) { }
  registrationGroupOfStudentsAtCourseForm = this.fb.group({

    groupNumber: ['', Validators.required],
    courseId: ['', Validators.required]
  })
  ngOnInit(): void {
  }

  registerGroupOfStudentsAtCourse(): void {
    let groupNumber = this.registrationGroupOfStudentsAtCourseForm.value.groupNumber;
    let courseId = this.registrationGroupOfStudentsAtCourseForm.value.courseId;
    this.registrationGroupOfStudentsAtCourseForm.reset();
    this.participantsService.registerGroupAtCourse(groupNumber, courseId).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

}
