import {Component, OnInit} from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-get-homework',
  templateUrl: './get-homework.component.html',
  styleUrls: ['./get-homework.component.scss']
})
export class GetHomeworkComponent implements OnInit {


  public homeworkId: any;
  panelOpenState = false;
  public AllHomeworks: GetHomeworkDTO[] = [];
  public homework: GetHomeworkDTO;

  constructor(private readonly homeworkService: HomeworkService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

  getHomework(id: number) {
    this.homeworkId = "";
    this.homeworkService.getHomework(id).subscribe((data: GetHomeworkDTO) => {
      this.homework = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getAllHomeworks() {
    this.homeworkService.getAllHomeworks().subscribe((data: GetHomeworkDTO[]) => {
      this.AllHomeworks = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

}
