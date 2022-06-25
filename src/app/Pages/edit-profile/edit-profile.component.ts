import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {StudentService} from "../../Services/StudentService/student.service";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";
import {GetProfessorDTO} from "../../DTOs/ProfessorDTOs/get-professor-dto";
import {FormBuilder, Validators} from "@angular/forms";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  public student: GetStudentDTO;
  public professor: GetProfessorDTO;
  private studentUsername: string = "";
  private professorUsername: string = "";

  isStudent: boolean = false;
  isProfessor: boolean = false;
  isAdmin: boolean = false;

  roles = this.keycloakService.getUserRoles();

  updateStudentForm = this.fb.group({

    firstName: [null],
    lastName: [null],
    password: [null],
    phone: [null],
  })
  updateProfessorForm = this.fb.group({

    firstName: [null],
    lastName: [null],
    password: [null],
    phone: [null],
  })

  constructor(private notifyService: NotificationService, private fb: FormBuilder, private keycloakService: KeycloakService, private studentService: StudentService, private professorService: ProfessorService) {
  }

  ngOnInit(): void {
    this.roles.forEach(value => {
      if (value == 'ROLE_STUDENT') {
        this.getStudentByUsername()
        this.isStudent = true;
      }
      if (value == 'ROLE_PROFESSOR') {
        this.getProfessorByUsername()
        this.isProfessor = true;
      }
    })

  }

  getStudentByUsername() {
    this.studentUsername = this.keycloakService.getUsername();
    this.studentService.getStudentByUsername(this.studentUsername).subscribe((data: GetStudentDTO) => {
      this.student = data;
    });
  }

  getProfessorByUsername() {
    this.professorUsername = this.keycloakService.getUsername();
    this.professorService.getProfessorByUsername(this.professorUsername).subscribe((data: GetProfessorDTO) => {
      this.professor = data;
    });
  }

  updateStudent() {
    let studentId = this.student.id;
    let studentRegisterDto = this.updateStudentForm.value;
    this.updateStudentForm.reset();
    this.studentService.updateStudent(studentId, studentRegisterDto).subscribe((data: any) => {
        this.ngOnInit();
      }, (err) => {
        this.notifyService.showError(err.error.message);
      }, () => {
        this.notifyService.showSuccess("Success")
      }
    );
  }

  updateProfessor() {
    let professorId = this.professor.id;
    let professorRegisterDto = this.updateProfessorForm.value;
    this.updateProfessorForm.reset();
    this.professorService.updateProfessor(professorId, professorRegisterDto).subscribe((data: any) => {
      this.ngOnInit();
    }, (err) => {
      this.notifyService.showError(err.error.message);
    }, () => {
      this.notifyService.showSuccess("Success")
    });
  }
}
