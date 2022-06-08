import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {map, Observable, startWith} from "rxjs";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {Student} from "../../Models/student";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.scss']
})
export class GetStudentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName','email', 'username','groupNumber','phone','year','department'];
  panelOpenState = false;

  public studentName: string;
  public studentId: any;
  public courseId: any;

  public StudentsByName: GetStudentDTO[] = [];
  public StudentsByCourseId: GetStudentDTO[] = [];
  public AllStudents: GetStudentDTO[] = [];
  public student: GetStudentDTO;

  public errorMessage: string;

  constructor(private readonly participantsService: ParticipantsService,private readonly studentService: StudentService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

  getAllStudentsByName(name: string) {
    this.studentName = "";
    this.studentService.getAllStudentsByName(name).subscribe((data: GetStudentDTO[]) => {
      this.StudentsByName = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getAllStudentsByCourseId(id: number) {
    this.courseId = "";
    this.participantsService.getAllStudentsByCourseId(id).subscribe((data: GetStudentDTO[]) => {
      this.StudentsByCourseId = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getStudent(id: number) {
    this.studentId = "";
    this.studentService.getStudent(id).subscribe((data: GetStudentDTO) => {
        this.student = data;
        console.log(this.student)
      },
      (err) => {
        this.notifyService.showError(err.error.message);
      }
    );
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((data: GetStudentDTO[]) => {
        this.AllStudents = data;
      }, (err) => {
        this.notifyService.showError(err.error.message);
      }
    );
  }

}
