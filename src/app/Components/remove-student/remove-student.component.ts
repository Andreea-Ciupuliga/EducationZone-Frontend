import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../Services/StudentService/student.service";
import {Student} from "../../Models/student";

@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.scss']
})
export class RemoveStudentComponent implements OnInit {

  constructor(private readonly studentService: StudentService) {
  }

  public studentId: any;

  ngOnInit(): void {
  }

  removeStudent(id: number) {
    this.studentId = "";
    this.studentService.removeStudent(id).subscribe((data: Student) => {
    });
  }

  removeAllStudents() {
    this.studentService.removeAllStudents().subscribe((data: Student) => {
    })
  }

}
