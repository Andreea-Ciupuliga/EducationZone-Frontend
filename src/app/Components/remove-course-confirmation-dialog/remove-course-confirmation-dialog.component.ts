import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Course} from "../../Model/course";
import {CourseService} from "../../Services/CourseService/course.service";

@Component({
  selector: 'app-remove-course-confirmation-dialog',
  templateUrl: './remove-course-confirmation-dialog.component.html',
  styleUrls: ['./remove-course-confirmation-dialog.component.scss']
})
export class RemoveCourseConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly courseService: CourseService) {
  }

  ngOnInit(): void {
  }

  removeCourse() {
    let courseId = this.data.courseId;
    this.courseService.removeCourse(courseId).subscribe((data: Course) => {
    });
  }

}
