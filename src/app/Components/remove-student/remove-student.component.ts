import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../Services/StudentService/student.service";
import {Student} from "../../Model/student";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.scss']
})
export class RemoveStudentComponent implements OnInit {

  public studentId: any;

  constructor(private readonly studentService: StudentService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  removeStudent(id: number) {
    this.studentId = "";
    this.studentService.removeStudent(id).subscribe((data: Student) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeAllStudents() {
    this.studentService.removeAllStudents().subscribe((data: Student) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    })
  }

}
