import {Component, OnInit} from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";

@Component({
  selector: 'app-get-homework',
  templateUrl: './get-homework.component.html',
  styleUrls: ['./get-homework.component.scss']
})
export class GetHomeworkComponent implements OnInit {
  displayedColumns: string[] = ['id', 'deadline','points', 'courseId', 'courseName', 'description'];
  panelOpenState = false;

  public homeworkId: any;
  public courseId: any;
  public studentId: any;

  public AllHomeworks: GetHomeworkDTO[] = [];
  public AllHomeworksByCourseId: GetHomeworkDTO[] = [];
  public AllHomeworksByStudentId: GetHomeworkDTO[] = [];
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

  getAllHomeworksByCourseId(id: number){
    this.courseId = "";
    this.homeworkService.getAllHomeworksByCourseId(id).subscribe((data: GetHomeworkDTO[]) => {
        this.AllHomeworksByCourseId = data;
      },
      (error) => {
        console.warn(error);
      });
  }

  getAllHomeworksByStudentId(id: number) {
    this.studentId = "";
    this.homeworkService.getAllHomeworksByStudentId(id).subscribe((data: GetHomeworkDTO[]) => {
      this.AllHomeworksByStudentId = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

}
