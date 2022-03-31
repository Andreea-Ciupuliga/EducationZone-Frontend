import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ExamService} from "../../Services/ExamService/exam.service";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-update-homework',
  templateUrl: './update-homework.component.html',
  styleUrls: ['./update-homework.component.scss']
})
export class UpdateHomeworkComponent implements OnInit {
  registrationForm = this.fb.group({
    id: [null, Validators.required],
    description: [null, Validators.required],
    deadline: [null, Validators.required],
    points: [null, Validators.required],
    courseId: [null, Validators.required],

  })

  constructor(private readonly homeworkService: HomeworkService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    let homeworkId = this.registrationForm.value.id;
    let homeworkRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.homeworkService.updateHomework(homeworkId, homeworkRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }
}
