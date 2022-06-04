import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterCourseComponent} from "../../Components/register-course/register-course.component";
import {UpdateCourseComponent} from "../../Components/update-course/update-course.component";
import {RemoveCourseComponent} from "../../Components/remove-course/remove-course.component";
import {RegisterExamComponent} from "../../Components/register-exam/register-exam.component";
import {UpdateExamComponent} from "../../Components/update-exam/update-exam.component";
import {RemoveExamComponent} from "../../Components/remove-exam/remove-exam.component";

@Component({
  selector: 'app-exam-administration',
  templateUrl: './exam-administration.component.html',
  styleUrls: ['./exam-administration.component.scss']
})
export class ExamAdministrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogAddNewExam() {
    const dialogRef = this.dialog.open(RegisterExamComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdateExam() {
    const dialogRef = this.dialog.open(UpdateExamComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogRemoveExam() {
    const dialogRef = this.dialog.open(RemoveExamComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
