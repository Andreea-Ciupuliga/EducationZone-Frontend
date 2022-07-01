import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-register-professor',
  templateUrl: './register-professor.component.html',
  styleUrls: ['./register-professor.component.scss']
})
export class RegisterProfessorComponent implements OnInit {


  registrationForm = this.fb.group({
    //scriem proprietatile pe care o sa le folosim

    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    username: ['', Validators.required],
    phone: ['', Validators.required],

  })

  constructor(private readonly professorService: ProfessorService, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }

  submit(): void {

    let professorRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.professorService.registerProfessor(professorRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    },()=>{
      this.notifyService.showSuccess("Success");
    });

  }

}
