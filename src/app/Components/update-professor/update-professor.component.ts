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
    firstName: [null],
    lastName: [null],
    email: [null],
    password: [null],
    username: [null],
    phone: [null],
  })

  constructor(private fb: FormBuilder, private readonly professorService: ProfessorService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }


  submit(): void {
    let professorId = this.registrationForm.value.id;

    if (professorId == null)
      throw this.notifyService.showError("Professor id is required");

    let professorRegisterDto = this.registrationForm.value;
    this.professorService.updateProfessor(professorId, professorRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    },()=>{
      this.notifyService.showSuccess("Success");
    });

  }

}
