import {Component, OnInit} from '@angular/core';
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {Student} from "../../Model/student";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-remove-student-from-course',
  templateUrl: './remove-student-from-course.component.html',
  styleUrls: ['./remove-student-from-course.component.scss']
})
export class RemoveStudentFromCourseComponent implements OnInit {

  removeStudentFromCourseForm = this.fb.group({

    studentId: [null, Validators.required],
    courseId: [null, Validators.required]
  })

  constructor(private readonly participantsService: ParticipantsService, private notifyService: NotificationService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  removeStudentFromCourse() {
    let studentId = this.removeStudentFromCourseForm.value.studentId;
    let courseId = this.removeStudentFromCourseForm.value.courseId;

    if (studentId == null || courseId == null)
      throw this.notifyService.showError("All fields are required");

    this.participantsService.removeStudentCourseRelationship(studentId, courseId).subscribe((data: Student) => {
      }, (err) => {
        this.notifyService.showError(err.error.message);
      },
      () => {
        this.notifyService.showSuccess("Success");
      });
  }


}
