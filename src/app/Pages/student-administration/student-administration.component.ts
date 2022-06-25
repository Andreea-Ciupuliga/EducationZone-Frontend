import { Component, OnInit } from '@angular/core';
import {RegisterProfessorComponent} from "../../Components/register-professor/register-professor.component";
import {UpdateProfessorComponent} from "../../Components/update-professor/update-professor.component";
import {RemoveProfessorComponent} from "../../Components/remove-professor/remove-professor.component";
import {RegisterStudentComponent} from "../../Components/register-student/register-student.component";
import {UpdateStudentComponent} from "../../Components/update-student/update-student.component";
import {RemoveStudentComponent} from "../../Components/remove-student/remove-student.component";
import {MatDialog} from "@angular/material/dialog";
import {RegisterStudentAtCourseComponent} from "../../Components/register-student-at-course/register-student-at-course.component";
import {RemoveStudentFromCourseComponent} from "../../Components/remove-student-from-course/remove-student-from-course.component";
import {RegisterGroupAtCourseComponent} from "../../Components/register-group-at-course/register-group-at-course.component";
import {RemoveGroupFromCourseComponent} from "../../Components/remove-group-from-course/remove-group-from-course.component";

@Component({
  selector: 'app-student-administration',
  templateUrl: './student-administration.component.html',
  styleUrls: ['./student-administration.component.scss']
})
export class StudentAdministrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogRegisterStudent() {
    const dialogRef = this.dialog.open(RegisterStudentComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogUpdateStudent() {
    const dialogRef = this.dialog.open(UpdateStudentComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogRemoveStudent() {
    const dialogRef = this.dialog.open(RemoveStudentComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogRemoveStudentFromCourse() {
    const dialogRef = this.dialog.open(RemoveStudentFromCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogAddStudentAtCourse() {
    const dialogRef = this.dialog.open(RegisterStudentAtCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogAddGroupOfStudentsAtCourse() {
    const dialogRef = this.dialog.open(RegisterGroupAtCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogRemoveGroupOfStudentsFromCourse() {
    const dialogRef = this.dialog.open(RemoveGroupFromCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
