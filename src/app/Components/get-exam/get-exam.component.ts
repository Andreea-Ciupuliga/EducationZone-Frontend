import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {ExamService} from "../../Services/ExamService/exam.service";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {Exam} from "../../Models/exam";

@Component({
  selector: 'app-get-exam',
  templateUrl: './get-exam.component.html',
  styleUrls: ['./get-exam.component.scss']
})
export class GetExamComponent implements OnInit {

  displayedColumns: string[] = ['id', 'courseName', 'examDate','examRoom', 'examHour','points', 'courseId','description','removeExam'];
  panelOpenState = false;

  public courseId: any;
  public examId: any;
  public studentId: any;

  public AllExamsByStudentId: GetExamDTO[] = [];
  public AllExams: GetExamDTO[] = [];

  public exam: GetExamDTO;
  public examByCourseId: GetExamDTO;

  constructor(private readonly examService: ExamService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }
  removeExam(id: number) {
    this.examService.removeExam(id).subscribe((data: Exam) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getExamByCourseId(id: number) {
    this.courseId = "";
    this.examService.getExamByCourseId(id).subscribe((data: GetExamDTO) => {
      this.examByCourseId = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getExam(id: number) {
    this.examId = "";
    this.examService.getExam(id).subscribe((data: GetExamDTO) => {
        this.exam = data;
        console.log("exam: ");
        console.log(this.exam);
      },
      (err) => {
        this.notifyService.showError(err.error.message);
      }
    );
  }

  getAllExamsByStudentId(id: number) {
    this.studentId = "";
    this.examService.getAllExamsByStudentId(id).subscribe((data: GetExamDTO[]) => {
      this.AllExamsByStudentId = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getAllExams() {
    this.examService.getAllExams().subscribe((data: GetExamDTO[]) => {
        this.AllExams = data;

      }, (err) => {
        this.notifyService.showError(err.error.message);
      }
    );
  }

}
