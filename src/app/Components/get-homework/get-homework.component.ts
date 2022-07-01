import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {UpdateHomeworkWithoutHomeworkIdComponent} from "../update-homework-without-homework-id/update-homework-without-homework-id.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {RemoveHomeworkConfirmationDialogComponent} from "../remove-homework-confirmation-dialog/remove-homework-confirmation-dialog.component";

@Component({
  selector: 'app-get-homework',
  templateUrl: './get-homework.component.html',
  styleUrls: ['./get-homework.component.scss']
})
export class GetHomeworkComponent implements OnInit {
  displayedColumns: string[] = ['id', 'deadline', 'points', 'courseId', 'courseName', 'description', 'removeHomework', 'editHomework'];
  public dataSourceAllHomeworksByCourseId = new MatTableDataSource<GetHomeworkDTO>();
  public dataSourceAllHomeworks = new MatTableDataSource<GetHomeworkDTO>();
  public dataSourceAllHomeworksByStudentId = new MatTableDataSource<GetHomeworkDTO>();

  panelOpenState = false;

  public homeworkId: any;
  public courseId: any;
  public studentId: any;

  public AllHomeworks: GetHomeworkDTO[] = [];
  public AllHomeworksByCourseId: GetHomeworkDTO[] = [];
  public AllHomeworksByStudentId: GetHomeworkDTO[] = [];
  public homework: GetHomeworkDTO;
  private oldHomework: GetHomeworkDTO;

  constructor(private change: ChangeDetectorRef, public dialog: MatDialog, private readonly homeworkService: HomeworkService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

//====================================getHomework===================================================================================================

  getHomework(id: number) {
    this.homeworkId = "";
    this.homeworkService.getHomework(id).subscribe((data: GetHomeworkDTO) => {
      this.homework = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      // @ts-ignore
      this.homework = null;
    });
  }

  openDialogRemoveHomeworkForGetHomeworkFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveHomeworkConfirmationDialogComponent, {
      data: {
        homeworkId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.homeworkService.getHomework(id).subscribe((data: GetHomeworkDTO) => {
        this.homework = data;
      }, (err) => {
        // @ts-ignore
        this.homework = null;
      });
    });
  }

  openDialogUpdateHomeworkForGetHomeworkFunction(idHomework: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateHomeworkWithoutHomeworkIdComponent, {
      data: {
        homeworkId: idHomework,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.homeworkService.getHomework(idHomework).subscribe((data: GetHomeworkDTO) => {
        this.homework = data;
      });
    });
  }

//====================================getAllHomeworks===================================================================================================

  getAllHomeworks() {
    this.homeworkService.getAllHomeworks().subscribe((data: GetHomeworkDTO[]) => {
      this.AllHomeworks = data;
      this.dataSourceAllHomeworks.data = this.AllHomeworks;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.dataSourceAllHomeworks.data = [];
    });
  }

  openDialogRemoveHomeworkForGetAllHomeworksFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveHomeworkConfirmationDialogComponent, {
      data: {
        homeworkId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllHomeworks()
    });
  }

  openDialogUpdateHomeworkForGetAllHomeworksFunction(idHomework: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateHomeworkWithoutHomeworkIdComponent, {
      data: {
        homeworkId: idHomework,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllHomeworks()
    });
  }

//======================================getAllHomeworksByCourseId=================================================================================================

  getAllHomeworksByCourseId(id: number) {
    this.courseId = id;
    this.homeworkService.getAllHomeworksByCourseId(id).subscribe((data: GetHomeworkDTO[]) => {
      this.AllHomeworksByCourseId = data;
      this.dataSourceAllHomeworksByCourseId.data = this.AllHomeworksByCourseId;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.dataSourceAllHomeworksByCourseId.data = [];
    });
  }

  openDialogRemoveHomeworkForGetAllHomeworksByCourseIdFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveHomeworkConfirmationDialogComponent, {
      data: {
        homeworkId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.homeworkService.getAllHomeworksByCourseId(this.courseId).subscribe((data: GetHomeworkDTO[]) => {
        this.AllHomeworksByCourseId = data;
        this.dataSourceAllHomeworksByCourseId.data = this.AllHomeworksByCourseId;
      }, (err) => {
        this.dataSourceAllHomeworksByCourseId.data = [];
      });
    });
  }

  openDialogUpdateHomeworkForGetAllHomeworksByCourseIdFunction(idHomework: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateHomeworkWithoutHomeworkIdComponent, {
      data: {
        homeworkId: idHomework,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.homeworkService.getHomework(idHomework).subscribe((data: GetHomeworkDTO) => {
        const homework = this.AllHomeworksByCourseId.find(homework => homework.id == idHomework)
        if (homework) {
          this.oldHomework = homework;
          var index = this.AllHomeworksByCourseId.indexOf(this.oldHomework)
          this.AllHomeworksByCourseId[index] = data;
          this.dataSourceAllHomeworksByCourseId.data = this.AllHomeworksByCourseId;
        }
      });
    });
  }

//========================================getAllHomeworksByStudentId===============================================================================================

  getAllHomeworksByStudentId(id: number) {
    this.studentId = id;
    this.homeworkService.getAllHomeworksByStudentId(id).subscribe((data: GetHomeworkDTO[]) => {
      this.AllHomeworksByStudentId = data;
      this.dataSourceAllHomeworksByStudentId.data = this.AllHomeworksByStudentId;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.dataSourceAllHomeworksByStudentId.data = [];
    });
  }

  openDialogRemoveHomeworkForGetAllHomeworksByStudentIdFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveHomeworkConfirmationDialogComponent, {
      data: {
        homeworkId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.homeworkService.getAllHomeworksByStudentId(this.studentId).subscribe((data: GetHomeworkDTO[]) => {
        this.AllHomeworksByStudentId = data;
        this.dataSourceAllHomeworksByStudentId.data = this.AllHomeworksByStudentId;
      }, (err) => {
        this.dataSourceAllHomeworksByStudentId.data = [];
      });
    });
  }

  openDialogUpdateHomeworkForGetAllHomeworksByStudentIdFunction(idHomework: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateHomeworkWithoutHomeworkIdComponent, {
      data: {
        homeworkId: idHomework,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.homeworkService.getHomework(idHomework).subscribe((data: GetHomeworkDTO) => {
        const homework = this.AllHomeworksByStudentId.find(homework => homework.id == idHomework)
        if (homework) {
          this.oldHomework = homework;
          var index = this.AllHomeworksByStudentId.indexOf(this.oldHomework)
          this.AllHomeworksByStudentId[index] = data;
          this.dataSourceAllHomeworksByStudentId.data = this.AllHomeworksByStudentId;
          this.change.detectChanges();
        }
      });
    });
  }
}
