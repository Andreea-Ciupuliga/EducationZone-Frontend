import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";
import {CourseService} from "../../Services/CourseService/course.service";

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.scss']
})
export class RegisterCourseComponent implements OnInit {

  registrationForm = this.fb.group({

    name: ['', Validators.required],
    numberOfStudents: ['', Validators.required],
    description: ['', Validators.required],
    year: ['', Validators.required],
    semester: ['', Validators.required],
  })

  constructor(private readonly courseService: CourseService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let courseRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.courseService.registerCourse(courseRegisterDto).subscribe((data: any) => {
    });

  }

}
