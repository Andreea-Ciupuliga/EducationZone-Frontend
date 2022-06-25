import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {empty, map, Observable, startWith, Subject, Subscription, takeUntil} from "rxjs";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {Student} from "../../Model/student";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {UpdateProfessorWithoutProfessorIdComponent} from "../update-professor-without-professor-id/update-professor-without-professor-id.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdateStudentWithoutStudentIdComponent} from "../update-student-without-student-id/update-student-without-student-id.component";
import {Router, NavigationEnd} from "@angular/router";

import {MatTable, MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.scss']
})
export class GetStudentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'username', 'groupNumber', 'phone', 'year', 'department', 'removeStudent', 'editStudent'];

  public dataSourceStudentsByName = new MatTableDataSource<GetStudentDTO>();
  public dataSourceStudentsByCourseId = new MatTableDataSource<GetStudentDTO>();
  public dataSourceAllStudents = new MatTableDataSource<GetStudentDTO>();

  panelOpenState = false;

  public studentName: string;
  public studentId: any;
  public courseId: any;

  public StudentsByName: GetStudentDTO[] = [];
  public StudentsByCourseId: GetStudentDTO[] = [];
  public AllStudents: GetStudentDTO[] = [];
  public student: GetStudentDTO;
  public oldStudent: GetStudentDTO;
  public errorMessage: string;

  constructor(private change: ChangeDetectorRef, private router: Router, public dialog: MatDialog, private readonly participantsService: ParticipantsService, private readonly studentService: StudentService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {

  }


  //====================================getAllStudents===========================================================================================================================

  getAllStudents() {
    this.studentService.getAllStudents()
      .subscribe((data: GetStudentDTO[]) => {
          this.AllStudents = data;
          this.dataSourceAllStudents.data = this.AllStudents;
        }, (err) => {
          this.notifyService.showError(err.error.message);
        }
      );
  }

  removeStudentForGetAllStudentsFunction(id: number) {
    this.studentService.removeStudent(id).subscribe((data: Student) => {
      this.getAllStudents();
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  openDialogUpdateStudentForGetAllStudentsFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateStudentWithoutStudentIdComponent, {
      data: {
        studentId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
    });
  }

//================================GetAllStudentsByName========================================================================================================================

  getAllStudentsByName(name: string) {
    this.studentName = name;
    this.studentService.getAllStudentsByName(name).subscribe((data: GetStudentDTO[]) => {
      this.StudentsByName = data;
      this.dataSourceStudentsByName.data = this.StudentsByName;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeStudentForGetAllStudentsByNameFunction(id: number) {
    this.studentService.removeStudent(id).subscribe((data: Student) => {


      this.studentService.getAllStudentsByName(this.studentName).subscribe((data: GetStudentDTO[]) => {
        this.StudentsByName = data;
        this.dataSourceStudentsByName.data = this.StudentsByName;
      }, (err) => {
        this.dataSourceStudentsByName.data = [];
      })


    });


  }

  openDialogUpdateStudentForGetAllStudentsByNameFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateStudentWithoutStudentIdComponent, {
      data: {
        studentId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.studentService.getStudent(id).subscribe((data: GetStudentDTO) => {

          const student = this.StudentsByName.find(student => student.id == id)

          if (student) {
            this.oldStudent = student;
            var index = this.StudentsByName.indexOf(this.oldStudent)
            this.StudentsByName[index] = data;
            this.dataSourceStudentsByName.data = this.StudentsByName;
            this.change.detectChanges();
          }

        });

    });
  }


//========================================GetAllStudentsByCourseId=======================================================================================================

  getAllStudentsByCourseId(id: number) {
    this.courseId = id;
    this.participantsService.getAllStudentsByCourseId(id).subscribe((data: GetStudentDTO[]) => {
      this.StudentsByCourseId = data;
      this.dataSourceStudentsByCourseId.data = this.StudentsByCourseId;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeStudentForGetAllStudentsByCourseIdFunction(id: number) {
    this.studentService.removeStudent(id).subscribe((data: Student) => {


      this.participantsService.getAllStudentsByCourseId(this.courseId).subscribe((data: GetStudentDTO[]) => {
        this.StudentsByCourseId = data;
        this.dataSourceStudentsByCourseId.data = this.StudentsByCourseId;


      }, (err) => {
        this.dataSourceStudentsByCourseId.data = [];
      })


    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  openDialogUpdateStudentForGetAllStudentsByCourseIdFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateStudentWithoutStudentIdComponent, {
      data: {
        studentId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.studentService.getStudent(id).subscribe((data: GetStudentDTO) => {

          const student = this.StudentsByCourseId.find(student => student.id == id)

          if (student) {
            this.oldStudent = student;
            var index = this.StudentsByCourseId.indexOf(this.oldStudent)
            this.StudentsByCourseId[index] = data;
            this.dataSourceStudentsByCourseId.data = this.StudentsByCourseId;
            this.change.detectChanges();
          }

        },
        (err) => {
          this.notifyService.showError(err.error.message);
        }
      );
    });
  }

//=============================================GetStudent==================================================================================================

  getStudent(id: number) {
    this.studentId = "";
    this.studentService.getStudent(id).subscribe((data: GetStudentDTO) => {
        this.student = data;
      },
      (err) => {
        this.notifyService.showError(err.error.message);
      }
    );
  }

  removeStudentForGetStudentFunction(id: number) {
    this.studentService.removeStudent(id).subscribe((data: Student) => {

      this.student = {
        id:0,
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        // @ts-ignore
        groupNumber:"",
        phone: "",
        year: "",
        department: ""
      };

    });
  }

  openDialogUpdateStudentForGetStudentFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateStudentWithoutStudentIdComponent, {
      data: {
        studentId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.studentService.getStudent(id).subscribe((data: GetStudentDTO) => {
          this.student = data;
          this.change.detectChanges();
        });
    });
  }
}
