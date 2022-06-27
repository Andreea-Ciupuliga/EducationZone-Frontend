import {Component, Inject, OnInit} from '@angular/core';
import {Homework} from "../../Model/homework";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-remove-homework-confirmation-dialog',
  templateUrl: './remove-homework-confirmation-dialog.component.html',
  styleUrls: ['./remove-homework-confirmation-dialog.component.scss']
})
export class RemoveHomeworkConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly homeworkService: HomeworkService) { }

  ngOnInit(): void {
  }

  removeHomework() {
    let homeworkId = this.data.homeworkId;
    this.homeworkService.removeHomework(homeworkId).subscribe((data: Homework) => {
    });
  }

}
