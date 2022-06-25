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
import {ManageCourseComponent} from "./Pages/manage-course/manage-course.component";
import {AccessDeniedComponent} from "./Pages/access-denied/access-denied.component";
import {AuthGuard} from "./auth/auth.guard";
import {AdminPanelComponent} from "./Pages/admin-panel/admin-panel.component";
import {ProfessorHomeComponent} from "./Pages/professor-home/professor-home.component";
import {StudentHomeComponent} from "./Pages/student-home/student-home.component";
import {EditProfileComponent} from "./Pages/edit-profile/edit-profile.component";
import {StickyNotesComponent} from "./Pages/sticky-notes/sticky-notes.component";
import {ContactComponent} from "./Pages/contact/contact.component";

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
    component: ExamsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_STUDENT'] },
  },
  {
    path:'homeworks',
    component: HomeworksComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_STUDENT'] },
  },

  {
    path:'courseDetails/:id',
    component: CourseDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_STUDENT'] },
  },
  {
    path:'manageCourse/:id',
    component: ManageCourseComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PROFESSOR'] },
  },
  {
    path:'grades',
    component:GradesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_STUDENT'] },
  },
  {
    path:'courseAdministration',
    component: CourseAdministrationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path:'examAdministration',
    component: ExamAdministrationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path:'homeworkAdministration',
    component: HomeworkAdministrationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path:'professorAdministration',
    component: ProfessorAdministrationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path:'studentAdministration',
    component: StudentAdministrationComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path:'admin-panel',
    component:AdminPanelComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path:'professor-home',
    component:ProfessorHomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PROFESSOR'] },
  },
  {
    path:'student-home',
    component:StudentHomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_STUDENT'] },
  },
  {
    path:'stickyNotes',
    component:StickyNotesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_STUDENT'] },
  },
  {
    path:'edit-profile',
    component:EditProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: [] },
  },

  {
    path:'contact',
    component:ContactComponent,
    canActivate: [AuthGuard],
    data: { roles: [] },
  },

  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
