import {Component, OnInit} from '@angular/core';
import {ExamService} from "../../Services/ExamService/exam.service";
import {Exam} from "../../Model/exam";
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

    if(id == null)
      throw this.notifyService.showError("Exam id is required");

    this.examService.removeExam(id).subscribe((data: Exam) => {
    });
  }

}
