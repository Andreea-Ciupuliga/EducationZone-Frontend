import {Component, OnInit} from '@angular/core';
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {Homework} from "../../Model/homework";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-remove-homework',
  templateUrl: './remove-homework.component.html',
  styleUrls: ['./remove-homework.component.scss']
})
export class RemoveHomeworkComponent implements OnInit {

  constructor(private readonly homeworkService: HomeworkService, private notifyService: NotificationService) {
  }

  public homeworkId: any;

  ngOnInit(): void {
  }

  removeHomework(id: number) {
    this.homeworkId = "";

    if(id == null)
      throw this.notifyService.showError("Homework id is required");

    this.homeworkService.removeHomework(id).subscribe((data: Homework) => {
    });
  }

}
