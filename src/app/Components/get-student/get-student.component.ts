import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateStudentWithoutStudentIdComponent} from "../update-student-without-student-id/update-student-without-student-id.component";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {RemoveStudentConfirmationDialogComponent} from "../remove-student-confirmation-dialog/remove-student-confirmation-dialog.component";

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

  constructor( private router: Router, public dialog: MatDialog, private readonly participantsService: ParticipantsService, private readonly studentService: StudentService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {

  }


  //====================================getAllStudents===========================================================================================================================

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((data: GetStudentDTO[]) => {
        this.AllStudents = data;
        this.dataSourceAllStudents.data = this.AllStudents;
      }, (err) => {
        this.notifyService.showError(err.error.message);
        this.dataSourceAllStudents.data = [];
      }
    );
  }

  openDialogRemoveStudentForGetAllStudentsFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveStudentConfirmationDialogComponent, {
      data: {
        studentId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
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
      this.dataSourceStudentsByName.data = [];
    });
  }

  openDialogRemoveStudentForGetAllStudentsByNameFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveStudentConfirmationDialogComponent, {
      data: {
        studentId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.studentService.getAllStudentsByName(this.studentName).subscribe((data: GetStudentDTO[]) => {
        this.StudentsByName = data;
        this.dataSourceStudentsByName.data = this.StudentsByName;
        console.log(" openDialogRemoveStudentForGetAllStudentsByNameFunction")
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
      this.dataSourceStudentsByCourseId.data = [];
    });
  }

  openDialogRemoveStudentForGetAllStudentsByCourseIdFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveStudentConfirmationDialogComponent, {
      data: {
        studentId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.participantsService.getAllStudentsByCourseId(this.courseId).subscribe((data: GetStudentDTO[]) => {
        this.StudentsByCourseId = data;
        this.dataSourceStudentsByCourseId.data = this.StudentsByCourseId;
      }, (err) => {
        this.dataSourceStudentsByCourseId.data = [];
      })
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
          }
        },
        (err) => {
          this.notifyService.showError(err.error.message);
        });
    });
  }

//=============================================GetStudent==================================================================================================

  getStudent(id: number) {
    this.studentId = id;
    this.studentService.getStudent(id).subscribe((data: GetStudentDTO) => {
      this.student = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      // @ts-ignore
      this.student = null;
    });
  }

  openDialogRemoveStudentForGetStudentFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveStudentConfirmationDialogComponent, {
      data: {
        studentId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.studentService.getStudent(id).subscribe((data: GetStudentDTO) => {
        this.student = data;
        console.log(" openDialogRemoveStudentForGetStudentFunction")
      }, (err) => {
        // @ts-ignore
        this.student = null;
      });
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
      });
    });
  }
}
