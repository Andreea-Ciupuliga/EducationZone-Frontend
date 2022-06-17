import {Component, OnInit} from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {Homework} from "../../Model/homework";
import {UpdateProfessorWithoutProfessorIdComponent} from "../update-professor-without-professor-id/update-professor-without-professor-id.component";
import {UpdateHomeworkWithoutHomeworkIdComponent} from "../update-homework-without-homework-id/update-homework-without-homework-id.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-get-homework',
  templateUrl: './get-homework.component.html',
  styleUrls: ['./get-homework.component.scss']
})
export class GetHomeworkComponent implements OnInit {
  displayedColumns: string[] = ['id', 'deadline','points', 'courseId', 'courseName', 'description','removeHomework','editHomework'];
  panelOpenState = false;

  public homeworkId: any;
  public courseId: any;
  public studentId: any;

  public AllHomeworks: GetHomeworkDTO[] = [];
  public AllHomeworksByCourseId: GetHomeworkDTO[] = [];
  public AllHomeworksByStudentId: GetHomeworkDTO[] = [];
  public homework: GetHomeworkDTO;

  constructor(public dialog: MatDialog,private readonly homeworkService: HomeworkService, private notifyService: NotificationService) {

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

  removeHomework(id: number) {
    this.homeworkService.removeHomework(id).subscribe((data: Homework) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  openDialogUpdateHomework(id: number) {
    const dialogRef = this.dialog.open(UpdateHomeworkWithoutHomeworkIdComponent, {
      data: {
        homeworkId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
