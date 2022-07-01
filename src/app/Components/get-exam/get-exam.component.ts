import { Component, OnInit} from '@angular/core';
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {ExamService} from "../../Services/ExamService/exam.service";
import {Exam} from "../../Model/exam";
import {UpdateExamWithoutExamIdComponent} from "../update-exam-without-exam-id/update-exam-without-exam-id.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {RemoveExamConfirmationDialogComponent} from "../remove-exam-confirmation-dialog/remove-exam-confirmation-dialog.component";

@Component({
  selector: 'app-get-exam',
  templateUrl: './get-exam.component.html',
  styleUrls: ['./get-exam.component.scss']
})
export class GetExamComponent implements OnInit {

  displayedColumns: string[] = ['id', 'courseName', 'examDate', 'examRoom', 'examHour', 'points', 'courseId', 'description', 'removeExam', 'editExam'];
  panelOpenState = false;

  public courseId: any;
  public examId: any;
  public studentId: any;

  public AllExamsByStudentId: GetExamDTO[] = [];
  public AllExams: GetExamDTO[] = [];

  public exam: GetExamDTO;
  public examByCourseId: GetExamDTO;
  public dataSourceAllExams = new MatTableDataSource<GetExamDTO>();
  public dataSourceAllExamsByStudentId = new MatTableDataSource<GetExamDTO>();
  private oldExam: GetExamDTO;

  constructor( public dialog: MatDialog, private readonly examService: ExamService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

//============================================getExamByCourseId================================================================================================================

  getExamByCourseId(id: number) {
    this.courseId = id;
    this.examService.getExamByCourseId(id).subscribe((data: GetExamDTO) => {
      this.examByCourseId = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      // @ts-ignore
      this.examByCourseId = null;
    });
  }

  openDialogUpdateExamForGetExamByCourseIdFunction(idExam: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateExamWithoutExamIdComponent, {
      data: {
        examId: idExam,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.examService.getExamByCourseId(this.courseId).subscribe((data: GetExamDTO) => {
        this.examByCourseId = data;
      });
    });
  }

  openDialogRemoveExamForGetExamByCourseIdFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveExamConfirmationDialogComponent, {
      data: {
        examId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.examService.getExamByCourseId(id).subscribe((data: GetExamDTO) => {
        this.examByCourseId = data;
      }, (err) => {
        // @ts-ignore
        this.examByCourseId = null;
      });
    });
  }


//============================================getExam================================================================================================================

  getExam(id: number) {
    this.examId = "";
    this.examService.getExam(id).subscribe((data: GetExamDTO) => {
      this.exam = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      // @ts-ignore
      this.exam = null;
    });
  }

  openDialogUpdateExamForGetExamFunction(idExam: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateExamWithoutExamIdComponent, {
      data: {
        examId: idExam,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.examService.getExam(idExam).subscribe((data: GetExamDTO) => {
        this.exam = data;
      });
    });
  }

  openDialogRemoveExamForGetExamFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveExamConfirmationDialogComponent, {
      data: {
        examId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.examService.getExam(id).subscribe((data: GetExamDTO) => {
        this.exam = data;
      }, (err) => {
        // @ts-ignore
        this.exam = null;
      });
    });
  }

  removeExamForGetExamFunction(id: number) {
    this.examService.removeExam(id).subscribe((data: Exam) => {
      // @ts-ignore
      this.exam = null;
    });
  }

//===========================================getAllExamsByStudentId=================================================================================================================

  getAllExamsByStudentId(id: number) {
    this.studentId = id;
    this.examService.getAllExamsByStudentId(id).subscribe((data: GetExamDTO[]) => {
      this.AllExamsByStudentId = data;
      this.dataSourceAllExamsByStudentId.data = this.AllExamsByStudentId;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.dataSourceAllExamsByStudentId.data = [];
    });
  }

  openDialogUpdateExamForGetAllExamsByStudentIdFunction(idExam: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateExamWithoutExamIdComponent, {
      data: {
        examId: idExam,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.examService.getExam(idExam).subscribe((data: GetExamDTO) => {
        const exam = this.AllExamsByStudentId.find(exam => exam.id == idExam)
        if (exam) {
          this.oldExam = exam;
          var index = this.AllExamsByStudentId.indexOf(this.oldExam)
          this.AllExamsByStudentId[index] = data;
          this.dataSourceAllExamsByStudentId.data = this.AllExamsByStudentId;
        }
      });
    });
  }

  openDialogRemoveExamForGetAllExamsByStudentIdFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveExamConfirmationDialogComponent, {
      data: {
        examId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.examService.getAllExamsByStudentId(this.studentId).subscribe((data: GetExamDTO[]) => {
        this.AllExamsByStudentId = data;
        this.dataSourceAllExamsByStudentId.data = this.AllExamsByStudentId;
      }, (err) => {
        this.dataSourceAllExamsByStudentId.data = [];
      });
    });
  }


//===================================getAllExams=========================================================================================================================

  getAllExams() {
    this.examService.getAllExams().subscribe((data: GetExamDTO[]) => {
        this.AllExams = data;
        this.dataSourceAllExams.data = this.AllExams;
      }, (err) => {
        this.notifyService.showError(err.error.message);
        this.dataSourceAllExams.data = [];
      }
    );
  }

  openDialogUpdateExamForGetAllExamsFunction(idExam: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateExamWithoutExamIdComponent, {
      data: {
        examId: idExam,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllExams();
    });
  }

  openDialogRemoveExamForGetAllExamsFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveExamConfirmationDialogComponent, {
      data: {
        examId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllExams();
    });
  }

}
