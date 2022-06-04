import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterHomeworkComponent} from "../../Components/register-homework/register-homework.component";
import {UpdateHomeworkComponent} from "../../Components/update-homework/update-homework.component";
import {RemoveHomeworkComponent} from "../../Components/remove-homework/remove-homework.component";

@Component({
  selector: 'app-homework-administration',
  templateUrl: './homework-administration.component.html',
  styleUrls: ['./homework-administration.component.scss']
})
export class HomeworkAdministrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogAddNewHomework() {
    const dialogRef = this.dialog.open(RegisterHomeworkComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdateHomework() {
    const dialogRef = this.dialog.open(UpdateHomeworkComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogRemoveHomework() {
    const dialogRef = this.dialog.open(RemoveHomeworkComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
