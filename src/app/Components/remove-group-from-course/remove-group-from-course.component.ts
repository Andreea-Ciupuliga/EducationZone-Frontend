import {Component, OnInit} from '@angular/core';
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-remove-group-from-course',
  templateUrl: './remove-group-from-course.component.html',
  styleUrls: ['./remove-group-from-course.component.scss']
})
export class RemoveGroupFromCourseComponent implements OnInit {

  constructor(private readonly participantsService: ParticipantsService, private notifyService: NotificationService, private fb: FormBuilder) {
  }

  removeGroupOfStudentsFromCourseForm = this.fb.group({

    groupNumber: [null, Validators.required],
    courseId: [null, Validators.required]
  })

  ngOnInit(): void {
  }

  removeGroupOfStudentsFromCourse(): void {
    let groupNumber = this.removeGroupOfStudentsFromCourseForm.value.groupNumber;
    let courseId = this.removeGroupOfStudentsFromCourseForm.value.courseId;

    if (groupNumber == null || courseId == null)
      throw this.notifyService.showError("All fields are required");

    this.participantsService.removeGroupFromCourse(groupNumber, courseId).subscribe((data: any) => {
      }, (err) => {
        this.notifyService.showError(err.error.message);
      },
      () => {
        this.notifyService.showSuccess("Success");
      });
  }

}
