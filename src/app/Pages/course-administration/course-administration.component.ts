import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterCourseComponent} from "../../Components/register-course/register-course.component";
import {UpdateCourseComponent} from "../../Components/update-course/update-course.component";
import {RemoveCourseComponent} from "../../Components/remove-course/remove-course.component";

@Component({
  selector: 'app-course-administration',
  templateUrl: './course-administration.component.html',
  styleUrls: ['./course-administration.component.scss']
})
export class CourseAdministrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogAddNewCourse() {
    const dialogRef = this.dialog.open(RegisterCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdateCourse() {
    const dialogRef = this.dialog.open(UpdateCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogRemoveCourse() {
    const dialogRef = this.dialog.open(RemoveCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
