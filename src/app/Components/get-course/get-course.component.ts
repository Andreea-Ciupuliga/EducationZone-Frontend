import {Component, OnInit} from '@angular/core';
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {CourseService} from "../../Services/CourseService/course.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {Course} from "../../Model/course";
import {MatDialog} from "@angular/material/dialog";
import {UpdateProfessorWithoutProfessorIdComponent} from "../update-professor-without-professor-id/update-professor-without-professor-id.component";
import {UpdateCourseWithoutCourseIdComponent} from "../update-course-without-course-id/update-course-without-course-id.component";

@Component({
  selector: 'app-get-course',
  templateUrl: './get-course.component.html',
  styleUrls: ['./get-course.component.scss']
})
export class GetCourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'courseName', 'numberOfStudents', 'year', 'semester', 'professorName', 'description', 'removeCourse', 'editCourse'];
  panelOpenState = false;

  public courseName: string;
  public courseId: any;
  public professorId: any;
  public studentId: any;

  public CoursesByName: GetCourseDTO[] = [];
  public CoursesByProfessorId: GetCourseDTO[] = [];
  public CoursesByStudentId: GetCourseDTO[] = [];
  public AllCourses: GetCourseDTO[] = [];

  public course: GetCourseDTO;

  constructor(public dialog: MatDialog, private readonly participantsService: ParticipantsService, private readonly courseService: CourseService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

  removeCourse(id: number) {
    this.courseService.removeCourse(id).subscribe((data: Course) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getAllCoursesByName(name: string) {
    this.courseName = "";
    this.courseService.getAllCoursesByName(name).subscribe((data: GetCourseDTO[]) => {
      this.CoursesByName = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getAllCoursesByProfessorId(id: number) {
    this.professorId = "";
    console.log(id);
    this.courseService.getAllCoursesByProfessorId(id).subscribe((data: GetCourseDTO[]) => {
      this.CoursesByProfessorId = data;
    });
  }

  getAllCoursesByStudentId(id: number) {
    this.studentId = "";
    this.participantsService.getAllCoursesByStudentId(id).subscribe((data: GetCourseDTO[]) => {
      this.CoursesByStudentId = data;
    });
  }

  getCourse(id: number) {
    this.courseId = "";
    this.courseService.getCourse(id).subscribe((data: GetCourseDTO) => {
      this.course = data;

    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe((data: GetCourseDTO[]) => {
      this.AllCourses = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  openDialogUpdateCourse(id: number) {
    const dialogRef = this.dialog.open(UpdateCourseWithoutCourseIdComponent, {
      data: {
        courseId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
