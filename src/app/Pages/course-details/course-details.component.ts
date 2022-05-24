import {Component, Input, OnInit} from '@angular/core';
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {CourseService} from "../../Services/CourseService/course.service";
import {ActivatedRoute} from "@angular/router";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {ExamService} from "../../Services/ExamService/exam.service";
import {GetExamDTO} from "../../DTOs/ExamDTOs/get-exam-dto";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  public Homeworks: GetHomeworkDTO[] = [];
  public course: GetCourseDTO={
    id: 0,
    name: "",
    numberOfStudents: 0,
    description: "",
    year: "",
    semester: "",
    professorName: "",
  }
  public exam: GetExamDTO = {
    id:0,
    courseName : "",
    description : "",
    examDate : "",
    points : "",
    examRoom : "",
    examHour : "",
    courseId : 0
  };

  constructor(private readonly examService: ExamService, private readonly homeworkService: HomeworkService, private readonly courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.courseService.getCourse(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetCourseDTO) => {
      this.course = data;
    });

    this.homeworkService.getAllHomeworksByCourseId(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetHomeworkDTO[]) => {
        this.Homeworks = data;
        console.log(this.Homeworks);
      },
      (error) => {
        console.warn(error);
      });

    this.examService.getExamByCourseId(Number(this.route.snapshot.paramMap.get('id'))).subscribe((data: GetExamDTO) => {
        this.exam = data;
        console.log(this.exam);
      },
      (error) => {
        console.warn(error);
      });

  }

}
