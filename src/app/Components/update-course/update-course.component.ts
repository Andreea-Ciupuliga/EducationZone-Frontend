import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CourseService} from "../../Services/CourseService/course.service";

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {

  registrationForm = this.fb.group({
    id: ['', Validators.required],
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

    let courseId = this.registrationForm.value.id;
    let courseRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.courseService.updateCourse(courseId, courseRegisterDto).subscribe((data: any) => {
    });

  }

}
