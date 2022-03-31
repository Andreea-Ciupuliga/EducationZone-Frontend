import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.scss']
})
export class UpdateProfessorComponent implements OnInit {
  registrationForm = this.fb.group({

    id: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.email],
    password: [null, Validators.required],
    username: [null, Validators.required],
    phone: [null, Validators.required],
  })

  constructor(private fb: FormBuilder, private readonly professorService: ProfessorService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }


  submit(): void {
    let professorId = this.registrationForm.value.id;
    let professorRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.professorService.updateProfessor(professorId, professorRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

}
