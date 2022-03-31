import {Component, OnInit} from '@angular/core';
import {ExamService} from "../../Services/ExamService/exam.service";
import {Exam} from "../../Models/exam";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-remove-exam',
  templateUrl: './remove-exam.component.html',
  styleUrls: ['./remove-exam.component.scss']
})
export class RemoveExamComponent implements OnInit {

  constructor(private readonly examService: ExamService, private notifyService: NotificationService) {
  }

  public examId: any;

  ngOnInit(): void {
  }

  removeExam(id: number) {
    this.examId = "";
    this.examService.removeExam(id).subscribe((data: Exam) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

}
