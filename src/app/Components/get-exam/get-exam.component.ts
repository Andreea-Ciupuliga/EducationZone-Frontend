import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {ExamService} from "../../Services/ExamService/exam.service";

@Component({
  selector: 'app-get-exam',
  templateUrl: './get-exam.component.html',
  styleUrls: ['./get-exam.component.scss']
})
export class GetExamComponent implements OnInit {

  public courseId: any;
  public studentId: any;
  panelOpenState = false;
  public AllExams: GetExamDTO[] = [];
  public exam: GetExamDTO;

  constructor(private readonly examService: ExamService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

  getExamByCourseId(id: number) {
    this.courseId = "";
    this.examService.getExamByCourseId(id).subscribe((data: GetExamDTO) => {
      this.exam = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getAllExamsByStudentId(id: number) {
    this.studentId = "";
    this.examService.getAllExamsByStudentId(id).subscribe((data: GetExamDTO[]) => {
      this.AllExams = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

}
