import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ExamService} from "../../Services/ExamService/exam.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.scss']
})
export class UpdateExamComponent implements OnInit {
  registrationForm = this.fb.group({
    id: [null, Validators.required],
    description: [null, Validators.required],
    examDate: [null, Validators.required],
    points: [null, Validators.required],
    courseId: [null, Validators.required],

  })

  constructor(private readonly examService: ExamService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    let examId = this.registrationForm.value.id;
    let examRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.examService.updateExam(examId, examRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }
}
