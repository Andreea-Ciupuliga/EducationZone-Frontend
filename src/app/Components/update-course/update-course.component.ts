import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CourseService} from "../../Services/CourseService/course.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {

  registrationForm = this.fb.group({
    id: [null, Validators.required],
    name: [null, Validators.required],
    numberOfStudents: [null, Validators.required],
    description: [null, Validators.required],
    year: [null, Validators.required],
    semester: [null, Validators.required],
    professorId: [null, Validators.required],
  })

  constructor(private readonly courseService: CourseService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let courseId = this.registrationForm.value.id;
    let courseRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.courseService.updateCourse(courseId, courseRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

}
