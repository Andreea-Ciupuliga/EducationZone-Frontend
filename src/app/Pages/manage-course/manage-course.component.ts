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

  addGradeForStudentForm = this.fb.group({
    courseGrade: ['', Validators.required]
  });

  registrationFormHomework = this.fb.group({
    description: ['', Validators.required],
    deadline: ['', Validators.required],
    points: ['', Validators.required],
  })

  registrationFormExam = this.fb.group({
    description: ['', Validators.required],
    examDate: ['', Validators.required],
    points: ['', Validators.required],
    examRoom: [null, Validators.required],
    examHour: [null, Validators.required],
  })

  updateFormExam = this.fb.group({
    description: [null, Validators.required],
    examDate: [null, Validators.required],
    points: [null, Validators.required],
    examRoom: [null, Validators.required],
    examHour: [null, Validators.required],
  })

  updateFormCourse = this.fb.group({
    name: [null, Validators.required],
    numberOfStudents: [null, Validators.required],
    description: [null, Validators.required],
    year: [null, Validators.required],
    semester: [null, Validators.required],
  })

  updateFormHomework = this.fb.group({
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
    let courseRegisterDto = this.updateFormCourse.value;
    this.updateFormCourse.reset();
    this.courseService.updateCourse(courseId, courseRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

  updateExam(): void {
    let examRegisterDto = this.updateFormExam.value;
    examRegisterDto.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.updateFormExam.reset();
    this.examService.updateExamByCourseId(examRegisterDto).subscribe((data: any) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  updateHomework(): void {
    let homeworkId = this.updateFormHomework.value.id;
    let homeworkRegisterDto = this.updateFormHomework.value;
    this.updateFormHomework.reset();
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

  registerHomework(): void {

    let homeworkRegisterDto = this.registrationFormHomework.value;
    homeworkRegisterDto.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.registrationFormHomework.reset();
    this.homeworkService.registerHomework(homeworkRegisterDto).subscribe((data: any) => {
    });

  }

  registerExam(): void {

    let examRegisterDto = this.registrationFormExam.value;
    examRegisterDto.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.registrationFormExam.reset();
    this.examService.registerExam(examRegisterDto).subscribe((data: any) => {
      },
      (err) => {
        this.notifyService.showError(err.error.message);
      });

  }

  removeExam(id: number) {
    window.location.reload()
    this.examService.removeExam(id).subscribe((data: Exam) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeHomework(id: number) {
    window.location.reload()
    this.homeworkService.removeHomework(id).subscribe((data: Homework) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  addGradeForStudent(studentId: number, courseGrade: string) {

    let courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.participantsService.addGradeForStudent(studentId, courseId, courseGrade).subscribe((data: Participants) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });

  }

}
