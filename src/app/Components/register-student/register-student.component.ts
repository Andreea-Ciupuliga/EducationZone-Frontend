import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {StudentService} from "../../Services/StudentService/student.service";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {map, Observable, startWith} from "rxjs";
import {Student} from "../../Models/student";
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {NotificationService} from "../../Services/NotificationService/notification.service";

export interface User {
  name: string;
}

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {
  panelOpenState = false;
  myControl = new FormControl();
  options: GetStudentDTO[] = [];
  filteredOptions: Observable<GetStudentDTO[]>;

  registrationForm = this.fb.group({

    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    username: ['', Validators.required],
    groupNumber: ['', Validators.required],
    phone: ['', Validators.required],
    year: ['', Validators.required],
    department: ['', Validators.required],
  })

  registrationStudentAtCourseForm = this.fb.group({

    studentId: ['', Validators.required],
    courseId: ['', Validators.required]
  })

  constructor(private readonly participantsService: ParticipantsService, private readonly studentService: StudentService, private fb: FormBuilder, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

    this.studentService.getAllStudents().subscribe((data: GetStudentDTO[]) => {         //daca nu scriem .subscribe nu o sa se faca requestul
      this.options = data;
      console.log(this.options)
    });

    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => (typeof value === 'string' ? value : value.name)),
    //   map(name => (name ? this._filter(name) : this.options.slice())),
    // );


  }

  //
  // displayFn(user: GetStudentDTO): string {
  //   return user && user.firstName ? user.firstName : '';
  // }

  // private _filter(name: string): GetStudentDTO[] {
  //   const filterValue = name.toLowerCase();
  //
  //   return this.options.filter(option => option.firstName.toLowerCase().includes(filterValue));
  // }

  submit(): void {

    let studentRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.studentService.registerStudent(studentRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

  registerStudentAtCourse(): void {
    let studentId = this.registrationStudentAtCourseForm.value.studentId;
    let courseId = this.registrationStudentAtCourseForm.value.courseId;
    this.participantsService.registerStudentAtCourse(studentId, courseId).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  // onSelFunc(option:GetStudentDTO){
  //   this.selectedValue=option
  //   console.log(this.selectedValue.firstName);
  // }

}
