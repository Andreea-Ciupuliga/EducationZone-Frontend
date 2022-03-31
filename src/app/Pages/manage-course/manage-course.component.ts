import {Component, OnInit} from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {ExamService} from "../../Services/ExamService/exam.service";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {CourseService} from "../../Services/CourseService/course.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {

  public Homeworks: GetHomeworkDTO[] = [];
  public course: GetCourseDTO;
  public exam: GetExamDTO;
  public AllStudents: GetStudentDTO[] = [];
  panelOpenState = false;

  registrationFormExam = this.fb.group({
    id: [null, Validators.required],
    description: [null, Validators.required],
    examDate: [null, Validators.required],
    points: [null, Validators.required],
    courseId: [null, Validators.required],

  })

  registrationFormCourse = this.fb.group({
    name: [null, Validators.required],
    numberOfStudents: [null, Validators.required],
    description: [null, Validators.required],
    year: [null, Validators.required],
    semester: [null, Validators.required],
  })

  registrationFormHomework = this.fb.group({
    id: [null, Validators.required],
    description: [null, Validators.required],
    deadline: [null, Validators.required],
    points: [null, Validators.required],
    courseId: [null, Validators.required],

  })

  constructor(private readonly participantsService: ParticipantsService, private readonly examService: ExamService, private readonly homeworkService: HomeworkService, private readonly courseService: CourseService, private route: ActivatedRoute, private fb: FormBuilder, private notifyService: NotificationService) {
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
      console.log(this.exam);
    });

  }

  updateCourse(): void {

    let courseId = Number(this.route.snapshot.paramMap.get('id'));
    let courseRegisterDto = this.registrationFormCourse.value;
    this.registrationFormCourse.reset();
    this.courseService.updateCourse(courseId, courseRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

  updateExam(): void {
    let examId = this.registrationFormExam.value.id;
    let examRegisterDto = this.registrationFormExam.value;
    this.registrationFormExam.reset();
    this.examService.updateExam(examId, examRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

  updateHomework(): void {
    let homeworkId = this.registrationFormHomework.value.id;
    let homeworkRegisterDto = this.registrationFormHomework.value;
    this.registrationFormHomework.reset();
    this.homeworkService.updateHomework(homeworkId, homeworkRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

  getAllStudentsByCourseId() {
    let courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.participantsService.getAllStudentsByCourseId(courseId).subscribe((data: GetStudentDTO[]) => {
      this.AllStudents = data;
    });
  }

}
