import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.scss']
})
export class UpdateProfessorComponent implements OnInit {
  registrationForm = this.fb.group({

    id: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    username: ['', Validators.required],
    phone: ['', Validators.required],
  })
  constructor(private fb: FormBuilder,private readonly professorService:ProfessorService) { }

  ngOnInit(): void {
  }


  submit(): void {
    let professorId = this.registrationForm.value.id;
    let professorRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.professorService.updateProfessor(professorId,professorRegisterDto).subscribe((data: any) => {
    });

  }

}
