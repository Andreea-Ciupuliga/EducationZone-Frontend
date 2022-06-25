import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterCourseComponent} from "../../Components/register-course/register-course.component";
import {UpdateCourseComponent} from "../../Components/update-course/update-course.component";
import {RemoveCourseComponent} from "../../Components/remove-course/remove-course.component";
import {RegisterStudentAtCourseComponent} from "../../Components/register-student-at-course/register-student-at-course.component";
import {RegisterGroupAtCourseComponent} from "../../Components/register-group-at-course/register-group-at-course.component";
import {RemoveGroupFromCourseComponent} from "../../Components/remove-group-from-course/remove-group-from-course.component";
import {RemoveStudentFromCourseComponent} from "../../Components/remove-student-from-course/remove-student-from-course.component";

@Component({
  selector: 'app-course-administration',
  templateUrl: './course-administration.component.html',
  styleUrls: ['./course-administration.component.scss']
})
export class CourseAdministrationComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialogAddNewCourse() {
    const dialogRef = this.dialog.open(RegisterCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogUpdateCourse() {
    const dialogRef = this.dialog.open(UpdateCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogRemoveCourse() {
    const dialogRef = this.dialog.open(RemoveCourseComponent);
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

  openDialogRemoveStudentFromCourse() {
    const dialogRef = this.dialog.open(RemoveStudentFromCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
