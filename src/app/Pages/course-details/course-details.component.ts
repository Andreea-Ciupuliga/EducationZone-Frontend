import {Component, Input, OnInit} from '@angular/core';
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {CourseService} from "../../Services/CourseService/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {ExamService} from "../../Services/ExamService/exam.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  displayedColumns: string[] = ['deadline', 'points', 'description'];
  public Homeworks: GetHomeworkDTO[] = [];
  public course: GetCourseDTO = {
    id: 0,
    name: "",
    numberOfStudents: 0,
    description: "",
    year: "",
    semester: "",
    professorName: "",
  }
  public exam: GetExamDTO;

  constructor(protected readonly router: Router, protected readonly keycloakService: KeycloakService, private readonly participantsService: ParticipantsService, private readonly examService: ExamService, private readonly homeworkService: HomeworkService, private readonly courseService: CourseService, private route: ActivatedRoute) {
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
    this.participantsService.checkIfTheStudentIsAddedToTheCourse(Number(this.route.snapshot.paramMap.get('id')), this.keycloakService.getUsername()).subscribe((data: Boolean) => {
      if (data == false)
        this.router.navigate(['access-denied']);
    });
  }

}
