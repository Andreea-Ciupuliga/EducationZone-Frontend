import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../Services/CourseService/course.service";
import {Course} from "../../Models/course";

@Component({
  selector: 'app-remove-course',
  templateUrl: './remove-course.component.html',
  styleUrls: ['./remove-course.component.scss']
})
export class RemoveCourseComponent implements OnInit {

  constructor(private readonly courseService: CourseService) {
  }

  public courseId: any;

  ngOnInit(): void {
  }

  removeCourse(id: number) {
    this.courseId = "";
    this.courseService.removeCourse(id).subscribe((data: Course) => {
    });
  }
}
