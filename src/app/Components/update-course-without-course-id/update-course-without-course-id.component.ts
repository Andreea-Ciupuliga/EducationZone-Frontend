import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CourseService} from "../../Services/CourseService/course.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-update-course-without-course-id',
  templateUrl: './update-course-without-course-id.component.html',
  styleUrls: ['./update-course-without-course-id.component.scss']
})

//fac update la curs fara sa scriu de mana id-ul acestuia
export class UpdateCourseWithoutCourseIdComponent implements OnInit {

  registrationForm = this.fb.group({
    id: [null, Validators.required],
    name: [null],
    description: [null],
    year: [null],
    semester: [null],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly courseService: CourseService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {


    let courseRegisterDto = this.registrationForm.value;
    let courseId = this.data.courseId;
    this.courseService.updateCourse(courseId, courseRegisterDto).subscribe((data: any) => {
    }, () => {

    },()=>{
      this.notifyService.showSuccess("Success");
    });

  }
}
