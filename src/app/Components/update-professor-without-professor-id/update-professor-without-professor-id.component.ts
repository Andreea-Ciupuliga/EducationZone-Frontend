import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-update-professor-without-professor-id',
  templateUrl: './update-professor-without-professor-id.component.html',
  styleUrls: ['./update-professor-without-professor-id.component.scss']
})
//fac update la profesor fara sa scriu de mana id-ul acestuia
export class UpdateProfessorWithoutProfessorIdComponent implements OnInit {

  registrationForm = this.fb.group({

    firstName: [null],
    lastName: [null],
    email: [null],
    password: [null],
    username: [null],
    phone: [null],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private readonly professorService: ProfessorService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {
  }


  submit(): void {
    let professorId = this.data.professorId;
    let professorRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.professorService.updateProfessor(professorId, professorRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

}
