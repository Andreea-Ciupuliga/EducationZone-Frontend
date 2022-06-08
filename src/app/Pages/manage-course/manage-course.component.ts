import {Component, OnInit, ViewChild} from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {ExamService} from "../../Services/ExamService/exam.service";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {CourseService} from "../../Services/CourseService/course.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, NgForm, Validators} from "@angular/forms";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {Exam} from "../../Models/exam";
import {Homework} from "../../Models/homework";
import {Participants} from "../../Models/participants";
import {RegisterExamComponent} from "../../Components/register-exam/register-exam.component";
import {MatDialog} from "@angular/material/dialog";
import {RegisterExamWithoutCourseIdComponent} from "../../Components/register-exam-without-course-id/register-exam-without-course-id.component";
import {RegisterHomeworkWithoutCourseIdComponent} from "../../Components/register-homework-without-course-id/register-homework-without-course-id.component";
import {UpdateExamWithoutExamIdComponent} from "../../Components/update-exam-without-exam-id/update-exam-without-exam-id.component";
import {UpdateCourseWithoutCourseIdComponent} from "../../Components/update-course-without-course-id/update-course-without-course-id.component";
import {UpdateHomeworkWithoutHomeworkIdComponent} from "../../Components/update-homework-without-homework-id/update-homework-without-homework-id.component";
import {RegisterGradeToStudentComponent} from "../../Components/register-grade-to-student/register-grade-to-student.component";
import {GetStudentAndGradeDTO} from "../../DTOs/StudentDTOs/get-student-and-grade-dto";

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {
  displayedColumnsHomeworks: string[] = ['deadline', 'points', 'description', 'removeHomework', 'editHomework'];
  displayedColumnsStudents: string[] = ['id', 'firstName', 'lastName','email', 'username','groupNumber','phone','year','department','grade','addGrade'];


  public Homeworks: GetHomeworkDTO[] = [];
  public course: GetCourseDTO;
  public exam: GetExamDTO;

  public AllStudents: GetStudentAndGradeDTO[] = [];
  panelOpenState = false;

  addGradeForStudentForm = this.fb.group({
    courseGrade: ['', Validators.required]
  });

  constructor(public dialog: MatDialog, private readonly participantsService: ParticipantsService, private readonly examService: ExamService, private readonly homeworkService: HomeworkService, private readonly courseService: CourseService, private route: ActivatedRoute, private fb: FormBuilder, private notifyService: NotificationService) {
  }

  ngOnInit(): void {

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

  getAllStudentsByCourseId() {
    let courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.participantsService.getAllStudentsAndGradesByCourseId(courseId).subscribe((data: GetStudentAndGradeDTO[]) => {
      this.AllStudents = data;
      console.log(this.AllStudents)
    });
  }

  openDialogAddNewExam() {
    const dialogRef = this.dialog.open(RegisterExamWithoutCourseIdComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id'))
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAddNewHomework() {
    const dialogRef = this.dialog.open(RegisterHomeworkWithoutCourseIdComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id'))
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdateExam(id:number) {
    const dialogRef = this.dialog.open(UpdateExamWithoutExamIdComponent, {
      data: {
        examId:id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdateCourse() {
    const dialogRef = this.dialog.open(UpdateCourseWithoutCourseIdComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id'))
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdateHomework(id: number) {
    const dialogRef = this.dialog.open(UpdateHomeworkWithoutHomeworkIdComponent, {
      data: {
        homeworkId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  removeExam(id: number) {

    this.examService.removeExam(id).subscribe((data: Exam) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeHomework(id: number) {

    this.homeworkService.removeHomework(id).subscribe((data: Homework) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  openDialogAddGradeForStudent(id:number){
    const dialogRef = this.dialog.open(RegisterGradeToStudentComponent, {
      data: {
        courseId: Number(this.route.snapshot.paramMap.get('id')),
        studentId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
