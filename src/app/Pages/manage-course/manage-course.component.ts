import {Component, OnInit} from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {ExamService} from "../../Services/ExamService/exam.service";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {CourseService} from "../../Services/CourseService/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterExamWithoutCourseIdComponent} from "../../Components/register-exam-without-course-id/register-exam-without-course-id.component";
import {RegisterHomeworkWithoutCourseIdComponent} from "../../Components/register-homework-without-course-id/register-homework-without-course-id.component";
import {UpdateExamWithoutExamIdComponent} from "../../Components/update-exam-without-exam-id/update-exam-without-exam-id.component";
import {UpdateCourseWithoutCourseIdComponent} from "../../Components/update-course-without-course-id/update-course-without-course-id.component";
import {UpdateHomeworkWithoutHomeworkIdComponent} from "../../Components/update-homework-without-homework-id/update-homework-without-homework-id.component";
import {RegisterGradeToStudentComponent} from "../../Components/register-grade-to-student/register-grade-to-student.component";
import {GetStudentAndGradeDTO} from "../../DTOs/StudentDTOs/get-student-and-grade-dto";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {KeycloakService} from "keycloak-angular";
import {RemoveExamConfirmationDialogComponent} from "../../Components/remove-exam-confirmation-dialog/remove-exam-confirmation-dialog.component";
import {RemoveHomeworkConfirmationDialogComponent} from "../../Components/remove-homework-confirmation-dialog/remove-homework-confirmation-dialog.component";

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {
  displayedColumnsHomeworks: string[] = ['deadline', 'points', 'description', 'removeHomework', 'editHomework'];
  displayedColumnsStudents: string[] = ['id', 'firstName', 'lastName', 'email', 'username', 'groupNumber', 'phone', 'year', 'department', 'grade', 'addGrade'];

  public studentName: string;

  public StudentsByName: GetStudentDTO[] = [];
  public Homeworks: GetHomeworkDTO[] = [];
  public course: GetCourseDTO = {
    id: 0,
    name: "",
    numberOfStudents: 0,
    description: "",
    year: "",
    semester: "",
    professorName: ""
  };
  public exam: GetExamDTO;
  public AllStudents: GetStudentAndGradeDTO[] = [];
  panelOpenState = false;

  addGradeForStudentForm = this.fb.group({
    courseGrade: ['', Validators.required]
  });

  constructor(protected readonly router: Router, protected readonly keycloakService: KeycloakService, public dialog: MatDialog, private readonly participantsService: ParticipantsService, private readonly examService: ExamService, private readonly homeworkService: HomeworkService, private readonly courseService: CourseService, private route: ActivatedRoute, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {

    this.isAccessAllowed();

    this.courseService.getCourse(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetCourseDTO) => {
      this.course = data;
    });

    this.homeworkService.getAllHomeworksByCourseId(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetHomeworkDTO[]) => {
      this.Homeworks = data;
    });

    this.examService.getExamByCourseId(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetExamDTO) => {
      this.exam = data;
    });
  }

  public async isAccessAllowed() {
    this.courseService.checkIfTheTeacherIsTeachingTheCourse(Number(this.route.snapshot.paramMap.get('id')), this.keycloakService.getUsername()).subscribe((data: Boolean) => {
      if (data == false)
        this.router.navigate(['access-denied']);
    });
  }

//==================================================================================UpdateCourse================================================================================

  openDialogUpdateCourse() {
    const dialogRef = this.dialog.open(UpdateCourseWithoutCourseIdComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id'))
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.courseService.getCourse(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetCourseDTO) => {
        this.course = data;
      });
    });
  }

//========================================================getAllStudentsByCourseIdAndStudentName===========================================================================

  getAllStudentsByCourseIdAndStudentName(studentName: string) {
    this.studentName = studentName;
    let courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.participantsService.getAllStudentsAndGradesByCourseIdAndStudentName(courseId, studentName).subscribe((data: GetStudentAndGradeDTO[]) => {
      this.StudentsByName = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.StudentsByName = [];
    });
  }

  openDialogAddGradeForStudentForGetAllStudentsByCourseIdAndStudentNameFunction(id: number) {
    const dialogRef = this.dialog.open(RegisterGradeToStudentComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id')),
        studentId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudentsByCourseIdAndStudentName(this.studentName);
    });
  }

//============================================================getAllStudentsByCourseId===========================================================================================================

  getAllStudentsByCourseId() {
    let courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.participantsService.getAllStudentsAndGradesByCourseId(courseId).subscribe((data: GetStudentAndGradeDTO[]) => {
      this.AllStudents = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  openDialogAddGradeForStudentForGetAllStudentsByCourseIdFunction(id: number) {
    const dialogRef = this.dialog.open(RegisterGradeToStudentComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id')),
        studentId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudentsByCourseId();
    });
  }

//=================================================================================EXAM=========================================================================================

  openDialogAddNewExam() {
    const dialogRef = this.dialog.open(RegisterExamWithoutCourseIdComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id'))
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialogUpdateExam(idExam: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateExamWithoutExamIdComponent, {
      data: {
        examId: idExam,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialogRemoveExam(id: number) {
    const dialogRef = this.dialog.open(RemoveExamConfirmationDialogComponent, {
      data: {
        examId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.examService.getExamByCourseId(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetExamDTO) => {
        this.exam = data;
      }, (err) => {
        // @ts-ignore
        this.exam = null;
      });
    });
  }

//===========================================================================HOMEWORK=============================================================================================

  openDialogAddNewHomework() {
    const dialogRef = this.dialog.open(RegisterHomeworkWithoutCourseIdComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id'))
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.homeworkService.getAllHomeworksByCourseId(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetHomeworkDTO[]) => {
        this.Homeworks = data;
      });
    });
  }

  openDialogUpdateHomework(idHomework: number, idCourse: number) {
    const dialogRef = this.dialog.open(UpdateHomeworkWithoutHomeworkIdComponent, {
      data: {
        homeworkId: idHomework,
        courseId: idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialogRemoveHomework(id: number) {
    const dialogRef = this.dialog.open(RemoveHomeworkConfirmationDialogComponent, {
      data: {
        homeworkId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.homeworkService.getAllHomeworksByCourseId(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetHomeworkDTO[]) => {
        this.Homeworks = data;
      }, () => {
        this.Homeworks = [];
      });
    });
  }

}
