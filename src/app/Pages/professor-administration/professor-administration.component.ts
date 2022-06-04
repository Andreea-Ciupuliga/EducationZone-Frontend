import { Component, OnInit } from '@angular/core';
import {RegisterStickyNotesComponent} from "../../Components/register-sticky-notes/register-sticky-notes.component";
import {MatDialog} from "@angular/material/dialog";
import {RegisterProfessorComponent} from "../../Components/register-professor/register-professor.component";
import {UpdateCourseComponent} from "../../Components/update-course/update-course.component";
import {RemoveCourseComponent} from "../../Components/remove-course/remove-course.component";
import {UpdateProfessorComponent} from "../../Components/update-professor/update-professor.component";
import {RemoveProfessorComponent} from "../../Components/remove-professor/remove-professor.component";

@Component({
  selector: 'app-professor-administration',
  templateUrl: './professor-administration.component.html',
  styleUrls: ['./professor-administration.component.scss']
})
export class ProfessorAdministrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogRegisterProfessor() {
    const dialogRef = this.dialog.open(RegisterProfessorComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdateProfessor() {
    const dialogRef = this.dialog.open(UpdateProfessorComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogRemoveProfessor() {
    const dialogRef = this.dialog.open(RemoveProfessorComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
