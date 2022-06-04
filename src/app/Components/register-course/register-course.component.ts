import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../Services/CourseService/course.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";


@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.scss']
})
export class RegisterCourseComponent implements OnInit {

  registrationForm = this.fb.group({

    name: ['', Validators.required],
    description: ['', Validators.required],
    year: ['', Validators.required],
    semester: ['', Validators.required],
    professorId: ['', Validators.required],
  })


  constructor(private notifyService: NotificationService, private readonly courseService: CourseService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  submit(): void {

    let courseRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.courseService.registerCourse(courseRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

}
