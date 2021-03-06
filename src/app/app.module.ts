import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {initializer} from "../utils/app-inits";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {GetExamComponent} from './Components/get-exam/get-exam.component';
import {HomeComponent} from './Pages/home/home.component';
import {CourseDetailsComponent} from './Pages/course-details/course-details.component';
import {CourseAdministrationComponent} from './Pages/course-administration/course-administration.component';
import {HomeworkAdministrationComponent} from './Pages/homework-administration/homework-administration.component';
import {ExamAdministrationComponent} from './Pages/exam-administration/exam-administration.component';
import {UpdateCourseComponent} from './Components/update-course/update-course.component';
import {ExamsComponent} from './Pages/exams/exams.component';
import {HomeworksComponent} from './Pages/homeworks/homeworks.component';
import {UpdateExamComponent} from './Components/update-exam/update-exam.component';
import {UpdateStudentComponent} from './Components/update-student/update-student.component';
import {UpdateProfessorComponent} from './Components/update-professor/update-professor.component';
import {UpdateHomeworkComponent} from './Components/update-homework/update-homework.component';
import {StudentAdministrationComponent} from './Pages/student-administration/student-administration.component';
import {ProfessorAdministrationComponent} from './Pages/professor-administration/professor-administration.component';
import {ToolbarComponent} from './Components/toolbar/toolbar.component';
import {GradesComponent} from './Pages/grades/grades.component';
import {GetStudentComponent} from './Components/get-student/get-student.component';
import {GetProfessorComponent} from './Components/get-professor/get-professor.component';
import {GetCourseComponent} from './Components/get-course/get-course.component';
import {GetHomeworkComponent} from './Components/get-homework/get-homework.component';
import {ManageCourseComponent} from './Pages/manage-course/manage-course.component';
import {AccessDeniedComponent} from "./Pages/access-denied/access-denied.component";
import {AdminPanelComponent} from "./Pages/admin-panel/admin-panel.component";
import {ProfessorHomeComponent} from "./Pages/professor-home/professor-home.component";
import {StudentHomeComponent} from "./Pages/student-home/student-home.component";
import {EditProfileComponent} from './Pages/edit-profile/edit-profile.component';
import {RegisterStudentComponent} from './Components/register-student/register-student.component';
import {RegisterCourseComponent} from './Components/register-course/register-course.component';
import {RegisterHomeworkComponent} from './Components/register-homework/register-homework.component';
import {RegisterProfessorComponent} from './Components/register-professor/register-professor.component';
import {RegisterExamComponent} from './Components/register-exam/register-exam.component';
import {RemoveStudentComponent} from './Components/remove-student/remove-student.component';
import {RemoveProfessorComponent} from './Components/remove-professor/remove-professor.component';
import {RemoveCourseComponent} from './Components/remove-course/remove-course.component';
import {RemoveExamComponent} from './Components/remove-exam/remove-exam.component';
import {RemoveHomeworkComponent} from './Components/remove-homework/remove-homework.component';
import {StickyNotesComponent} from './Pages/sticky-notes/sticky-notes.component';
import {ContactComponent} from './Pages/contact/contact.component';
import {RegisterStickyNotesComponent} from './Components/register-sticky-notes/register-sticky-notes.component';
import {RegisterStudentAtCourseComponent} from './Components/register-student-at-course/register-student-at-course.component';
import {RemoveStudentFromCourseComponent} from './Components/remove-student-from-course/remove-student-from-course.component';
import {RegisterGroupAtCourseComponent} from './Components/register-group-at-course/register-group-at-course.component';
import {RemoveGroupFromCourseComponent} from './Components/remove-group-from-course/remove-group-from-course.component';
import {RegisterExamWithoutCourseIdComponent} from './Components/register-exam-without-course-id/register-exam-without-course-id.component';
import {RegisterHomeworkWithoutCourseIdComponent} from './Components/register-homework-without-course-id/register-homework-without-course-id.component';
import {UpdateExamWithoutExamIdComponent} from './Components/update-exam-without-exam-id/update-exam-without-exam-id.component';
import {UpdateCourseWithoutCourseIdComponent} from './Components/update-course-without-course-id/update-course-without-course-id.component';
import {UpdateHomeworkWithoutHomeworkIdComponent} from './Components/update-homework-without-homework-id/update-homework-without-homework-id.component';
import {RegisterGradeToStudentComponent} from './Components/register-grade-to-student/register-grade-to-student.component';
import {UpdateProfessorWithoutProfessorIdComponent} from './Components/update-professor-without-professor-id/update-professor-without-professor-id.component';
import { UpdateStudentWithoutStudentIdComponent } from './Components/update-student-without-student-id/update-student-without-student-id.component';
import { RemoveHomeworkConfirmationDialogComponent } from './Components/remove-homework-confirmation-dialog/remove-homework-confirmation-dialog.component';
import { RemoveCourseConfirmationDialogComponent } from './Components/remove-course-confirmation-dialog/remove-course-confirmation-dialog.component';
import { RemoveExamConfirmationDialogComponent } from './Components/remove-exam-confirmation-dialog/remove-exam-confirmation-dialog.component';
import { RemoveStudentConfirmationDialogComponent } from './Components/remove-student-confirmation-dialog/remove-student-confirmation-dialog.component';
import { RemoveProfessorConfirmationDialogComponent } from './Components/remove-professor-confirmation-dialog/remove-professor-confirmation-dialog.component';
//material imports
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from "ngx-toastr";
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';





@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentComponent,
    RegisterCourseComponent,
    RegisterHomeworkComponent,
    RegisterProfessorComponent,
    RegisterExamComponent,
    RemoveStudentComponent,
    RemoveProfessorComponent,
    RemoveCourseComponent,
    RemoveExamComponent,
    RemoveHomeworkComponent,
    HomeComponent,
    CourseDetailsComponent,
    CourseAdministrationComponent,
    HomeworkAdministrationComponent,
    ExamAdministrationComponent,
    UpdateCourseComponent,
    ExamsComponent,
    HomeworksComponent,
    UpdateExamComponent,
    UpdateStudentComponent,
    UpdateProfessorComponent,
    UpdateHomeworkComponent,
    StudentAdministrationComponent,
    ProfessorAdministrationComponent,
    ToolbarComponent,
    GradesComponent,
    GetStudentComponent,
    AdminPanelComponent,
    GetProfessorComponent,
    GetCourseComponent,
    GetHomeworkComponent,
    ProfessorHomeComponent,
    ManageCourseComponent,
    GetExamComponent,
    StudentHomeComponent,
    AccessDeniedComponent,
    EditProfileComponent,
    StickyNotesComponent,
    RegisterStickyNotesComponent,
    RegisterStudentAtCourseComponent,
    RemoveStudentFromCourseComponent,
    RegisterGroupAtCourseComponent,
    RemoveGroupFromCourseComponent,
    ContactComponent,
    RegisterExamWithoutCourseIdComponent,
    RegisterHomeworkWithoutCourseIdComponent,
    UpdateExamWithoutExamIdComponent,
    UpdateCourseWithoutCourseIdComponent,
    UpdateHomeworkWithoutHomeworkIdComponent,
    RegisterGradeToStudentComponent,
    UpdateProfessorWithoutProfessorIdComponent,
    UpdateStudentWithoutStudentIdComponent,
    RemoveHomeworkConfirmationDialogComponent,
    RemoveCourseConfirmationDialogComponent,
    RemoveExamConfirmationDialogComponent,
    RemoveStudentConfirmationDialogComponent,
    RemoveProfessorConfirmationDialogComponent,


  ],
  imports: [
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatExpansionModule,
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    KeycloakAngularModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
