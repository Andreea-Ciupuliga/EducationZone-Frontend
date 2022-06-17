import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../Services/CourseService/course.service";
import {Course} from "../../Model/course";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-remove-course',
  templateUrl: './remove-course.component.html',
  styleUrls: ['./remove-course.component.scss']
})
export class RemoveCourseComponent implements OnInit {

  constructor(private readonly courseService: CourseService, private notifyService: NotificationService) {
  }
  public courseId: any;

  ngOnInit(): void {
  }

  removeCourse(id: number) {
    this.courseId = "";
    this.courseService.removeCourse(id).subscribe((data: Course) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }
}
