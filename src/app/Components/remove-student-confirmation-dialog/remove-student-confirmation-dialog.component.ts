import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {StudentService} from "../../Services/StudentService/student.service";
import {Student} from "../../Model/student";

@Component({
  selector: 'app-remove-student-confirmation-dialog',
  templateUrl: './remove-student-confirmation-dialog.component.html',
  styleUrls: ['./remove-student-confirmation-dialog.component.scss']
})
export class RemoveStudentConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  removeStudent() {
    let studentId = this.data.studentId;
    this.studentService.removeStudent(studentId).subscribe((data: Student) => {
    });
  }

}
