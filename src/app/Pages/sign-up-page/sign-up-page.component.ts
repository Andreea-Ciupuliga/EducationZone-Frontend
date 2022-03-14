import {Component, OnInit} from '@angular/core';
import {RegisterStudentDTO} from "../../DTOs/StudentDTOs/register-student-dto";
import {FormBuilder, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {


  ngOnInit(): void {
  }


}
