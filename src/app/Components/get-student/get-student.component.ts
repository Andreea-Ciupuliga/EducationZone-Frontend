import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {map, Observable, startWith} from "rxjs";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {Student} from "../../Models/student";

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.scss']
})
export class GetStudentComponent implements OnInit {

  public studentName:string;
  public studentId:any;
  panelOpenState = false;
  public StudentsByName : GetStudentDTO[]=[];
  public AllStudents : GetStudentDTO[]=[];
  public student: GetStudentDTO;

  constructor(private readonly studentService: StudentService) {

  }

  ngOnInit(): void {

  }

  getAllStudentsByName(name:string){
    this.studentName="";
    this.studentService.getAllStudentsByName(name).subscribe((data: GetStudentDTO[]) => {
    this.StudentsByName=data;
    });
  }

  getStudent(id: number){
    this.studentId = "";
    this.studentService.getStudent(id).subscribe((data: GetStudentDTO) => {
      this.student=data;
      console.log(this.student)
    });
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe((data: GetStudentDTO[]) => {
      this.AllStudents=data;
    });
  }

}
