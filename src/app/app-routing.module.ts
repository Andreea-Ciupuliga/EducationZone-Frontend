import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Pages/home/home.component";
import {CourseDetailsComponent} from "./Pages/course-details/course-details.component";
import {CourseAdministrationComponent} from "./Pages/course-administration/course-administration.component";
import {ExamAdministrationComponent} from "./Pages/exam-administration/exam-administration.component";
import {HomeworkAdministrationComponent} from "./Pages/homework-administration/homework-administration.component";
import {ExamsComponent} from "./Pages/exams/exams.component";
import {HomeworksComponent} from "./Pages/homeworks/homeworks.component";
import {StudentAdministrationComponent} from "./Pages/student-administration/student-administration.component";
import {ProfessorAdministrationComponent} from "./Pages/professor-administration/professor-administration.component";
import {GradesComponent} from "./Pages/grades/grades.component";
import {AdminPageComponent} from "./Pages/admin-page/admin-page.component";
import {ProfessorPageComponent} from "./Pages/professor-page/professor-page.component";
import {ManageCourseComponent} from "./Pages/manage-course/manage-course.component";
//import {AccessDeniedComponent} from "./access-denied/access-denied.component";
//import {AuthGuard} from "./auth/auth.guard";
//import {AdminComponent} from "./admin/admin.component";
//import {ManagerComponent} from "./manager/manager.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'exams',
    component: ExamsComponent
  },
  {
    path:'homeworks',
    component: HomeworksComponent
  },
  {
    path:'grades',
    component:GradesComponent
  },
  {
    path:'courseDetails/:id',
    component: CourseDetailsComponent
  },
  {
    path:'manageCourse/:id',
    component: ManageCourseComponent
  },
  {
    path:'courseAdministration',
    component: CourseAdministrationComponent
  },
  {
    path:'examAdministration',
    component: ExamAdministrationComponent
  },
  {
    path:'homeworkAdministration',
    component: HomeworkAdministrationComponent
  },
  {
    path:'professorAdministration',
    component: ProfessorAdministrationComponent
  },
  {
    path:'studentAdministration',
    component: StudentAdministrationComponent
  },
  {
    path:'admin-page',
    component:AdminPageComponent
  },
  {
    path:'professor-page',
    component:ProfessorPageComponent
  },

  // {
  //   path: 'access-denied',
  //   component: AccessDeniedComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: ['ROLE_CLIENT_ADMIN'] },
  // },
  // {
  //   path: 'manager',
  //   component: ManagerComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: ['ROLE_CLIENT_STUDENT'] },
  // },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
