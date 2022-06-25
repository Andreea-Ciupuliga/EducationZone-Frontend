import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-update-homework-without-homework-id',
  templateUrl: './update-homework-without-homework-id.component.html',
  styleUrls: ['./update-homework-without-homework-id.component.scss']
})
export class UpdateHomeworkWithoutHomeworkIdComponent implements OnInit {
  registrationForm = this.fb.group({
    id: [null],
    description: [null],
    deadline: [null],
    points: [null],
    courseId: [null]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly homeworkService: HomeworkService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    let homeworkId = this.data.homeworkId;
    let homeworkRegisterDto = this.registrationForm.value;
    homeworkRegisterDto.courseId = this.data.courseId;
    this.homeworkService.updateHomework(homeworkId, homeworkRegisterDto).subscribe((data: any) => {
    });

  }
}
