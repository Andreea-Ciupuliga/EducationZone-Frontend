import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GetCourseDTO} from "../../DTOs/CourseDTOs/get-course-dto";
import {CourseService} from "../../Services/CourseService/course.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateCourseWithoutCourseIdComponent} from "../update-course-without-course-id/update-course-without-course-id.component";
import {MatTableDataSource} from "@angular/material/table";
import {RemoveCourseConfirmationDialogComponent} from "../remove-course-confirmation-dialog/remove-course-confirmation-dialog.component";

@Component({
  selector: 'app-get-course',
  templateUrl: './get-course.component.html',
  styleUrls: ['./get-course.component.scss']
})
export class GetCourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'courseName', 'numberOfStudents', 'year', 'semester', 'professorName', 'description', 'removeCourse', 'editCourse'];
  panelOpenState = false;

  public dataSourceCoursesByProfessorId = new MatTableDataSource<GetCourseDTO>();
  public dataSourceCoursesByName = new MatTableDataSource<GetCourseDTO>();
  public dataSourceCoursesByStudentId = new MatTableDataSource<GetCourseDTO>();
  public dataSourceAllCourses = new MatTableDataSource<GetCourseDTO>();
  public oldCourse: any;

  public courseName: string;
  public courseId: any;
  public professorId: any;
  public studentId: any;

  public CoursesByName: GetCourseDTO[] = [];
  public CoursesByProfessorId: GetCourseDTO[] = [];
  public CoursesByStudentId: GetCourseDTO[] = [];
  public AllCourses: GetCourseDTO[] = [];

  public course: GetCourseDTO;

  constructor(private change: ChangeDetectorRef, public dialog: MatDialog, private readonly participantsService: ParticipantsService, private readonly courseService: CourseService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

//=========================================getAllCoursesByName===============================================================
  getAllCoursesByName(name: string) {
    this.courseName = name;
    this.courseService.getAllCoursesByName(name).subscribe((data: GetCourseDTO[]) => {
      this.CoursesByName = data;
      this.dataSourceCoursesByName.data = this.CoursesByName;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.dataSourceCoursesByName.data = [];
    });
  }

  openDialogUpdateCourseForGetAllCoursesByNameFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateCourseWithoutCourseIdComponent, {
      data: {
        courseId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.courseService.getCourse(id).subscribe((data: GetCourseDTO) => {
          const course = this.CoursesByName.find(course => course.id == id)
          if (course) {
            this.oldCourse = course;
            var index = this.CoursesByName.indexOf(this.oldCourse)
            this.CoursesByName[index] = data;
            this.dataSourceCoursesByName.data = this.CoursesByName;
            this.change.detectChanges();
          }
        },
        (err) => {
          this.notifyService.showError(err.error.message);
        }
      );
    });
  }

  openDialogRemoveCourseForGetAllCoursesByNameFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveCourseConfirmationDialogComponent, {
      data: {
        courseId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.courseService.getAllCoursesByName(this.courseName).subscribe((data: GetCourseDTO[]) => {
        this.CoursesByName = data;
        this.dataSourceCoursesByName.data = this.CoursesByName;
      }, (err) => {
        this.dataSourceCoursesByName.data = [];
      });
    });
  }

//==============================================getAllCoursesByProfessorId======================================================
  getAllCoursesByProfessorId(id: number) {
    this.professorId = id;
    this.courseService.getAllCoursesByProfessorId(id).subscribe((data: GetCourseDTO[]) => {
      this.CoursesByProfessorId = data;
      this.dataSourceCoursesByProfessorId.data = this.CoursesByProfessorId;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.dataSourceCoursesByProfessorId.data = [];
    });
  }

  openDialogUpdateCourseForGetAllCoursesByProfessorIdFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateCourseWithoutCourseIdComponent, {
      data: {
        courseId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {


      this.courseService.getCourse(id).subscribe((data: GetCourseDTO) => {

          const course = this.CoursesByProfessorId.find(course => course.id == id)

          if (course) {
            this.oldCourse = course;
            var index = this.CoursesByProfessorId.indexOf(this.oldCourse)
            this.CoursesByProfessorId[index] = data;
            this.dataSourceCoursesByProfessorId.data = this.CoursesByProfessorId;
            this.change.detectChanges();
          }

        },
        (err) => {
          this.notifyService.showError(err.error.message);
        }
      );


    });
  }

  openDialogRemoveCourseForGetAllCoursesByProfessorIdFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveCourseConfirmationDialogComponent, {
      data: {
        courseId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.courseService.getAllCoursesByProfessorId(this.professorId).subscribe((data: GetCourseDTO[]) => {
        this.CoursesByProfessorId = data;
        this.dataSourceCoursesByProfessorId.data = this.CoursesByProfessorId;
      }, (err) => {
        this.dataSourceCoursesByProfessorId.data = [];
      });
    });
  }

//==============================================getAllCoursesByStudentId======================================================

  getAllCoursesByStudentId(id: number) {
    this.studentId = id;
    this.participantsService.getAllCoursesByStudentId(id).subscribe((data: GetCourseDTO[]) => {
      this.CoursesByStudentId = data;
      this.dataSourceCoursesByStudentId.data = this.CoursesByStudentId;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.dataSourceCoursesByStudentId.data = [];
    });
  }

  openDialogUpdateCourseForGetAllCoursesByStudentIdFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateCourseWithoutCourseIdComponent, {
      data: {
        courseId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.courseService.getCourse(id).subscribe((data: GetCourseDTO) => {
          const course = this.CoursesByStudentId.find(course => course.id == id)
          if (course) {
            this.oldCourse = course;
            var index = this.CoursesByStudentId.indexOf(this.oldCourse)
            this.CoursesByStudentId[index] = data;
            this.dataSourceCoursesByStudentId.data = this.CoursesByStudentId;
            this.change.detectChanges();
          }
        },
        (err) => {
          this.notifyService.showError(err.error.message);
        });
    });
  }


  openDialogRemoveCourseForGetAllCoursesByStudentIdFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveCourseConfirmationDialogComponent, {
      data: {
        courseId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.participantsService.getAllCoursesByStudentId(this.studentId).subscribe((data: GetCourseDTO[]) => {
        this.CoursesByStudentId = data;
        this.dataSourceCoursesByStudentId.data = this.CoursesByStudentId;
      }, (err) => {
        this.dataSourceCoursesByStudentId.data = [];
      });
    });
  }

//===============================================getCourse=====================================================

  getCourse(id: number) {
    this.courseId = id;
    this.courseService.getCourse(id).subscribe((data: GetCourseDTO) => {
      this.course = data;

    }, (err) => {
      this.notifyService.showError(err.error.message);
      // @ts-ignore
      this.course = null;
    });
  }

  openDialogUpdateCourseForGetCourseFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateCourseWithoutCourseIdComponent, {
      data: {
        courseId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.courseService.getCourse(id).subscribe((data: GetCourseDTO) => {
        this.course = data;
      })
    });
  }

  openDialogRemoveCourseForGetCourseFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveCourseConfirmationDialogComponent, {
      data: {
        courseId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.courseService.getCourse(id).subscribe((data: GetCourseDTO) => {
        this.course = data;
      }, (err) => {
        // @ts-ignore
        this.course = null
      });
    });
  }

//===============================================getAllCourses=====================================================

  getAllCourses() {
    this.courseService.getAllCourses().subscribe((data: GetCourseDTO[]) => {
      this.AllCourses = data;
      this.dataSourceAllCourses.data = this.AllCourses;
    }, (err) => {
      this.notifyService.showError(err.error.message);
      this.dataSourceAllCourses.data = [];
    });
  }

  openDialogUpdateCourseForGetAllCoursesFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateCourseWithoutCourseIdComponent, {
      data: {
        courseId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllCourses()
    });
  }

  openDialogRemoveCourseForGetAllCoursesFunction(id: number) {
    const dialogRef = this.dialog.open(RemoveCourseConfirmationDialogComponent, {
      data: {
        courseId: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllCourses()
    });
  }
}
