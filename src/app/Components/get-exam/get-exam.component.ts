import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {ExamService} from "../../Services/ExamService/exam.service";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {Exam} from "../../Model/exam";
import {UpdateProfessorWithoutProfessorIdComponent} from "../update-professor-without-professor-id/update-professor-without-professor-id.component";
import {UpdateExamWithoutExamIdComponent} from "../update-exam-without-exam-id/update-exam-without-exam-id.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";

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

  constructor(private change: ChangeDetectorRef, public dialog: MatDialog, private readonly examService: ExamService, private notifyService: NotificationService) {

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
        this.change.detectChanges();
      });

    });
  }

  removeExamForGetExamByCourseIdFunction(id: number) {
    this.examService.removeExam(id).subscribe((data: Exam) => {
      // @ts-ignore
      this.examByCourseId = null;
    });
  }

//============================================getExam================================================================================================================

  getExam(id: number) {
    this.examId = "";
    this.examService.getExam(id).subscribe((data: GetExamDTO) => {
        this.exam = data;
      },
      (err) => {
        this.notifyService.showError(err.error.message);
      }
    );
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
        this.change.detectChanges();
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
          this.change.detectChanges();
        }

      });


    });
  }

  removeExamForGetAllExamsByStudentIdFunction(id: number) {
    this.examService.removeExam(id).subscribe((data: Exam) => {


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

  removeExamForGetAllExamsFunction(id: number) {
    this.examService.removeExam(id).subscribe((data: Exam) => {
      this.getAllExams();
    });
  }
}
