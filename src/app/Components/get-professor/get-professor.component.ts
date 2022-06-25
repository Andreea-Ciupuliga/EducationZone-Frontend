import {Component, OnInit} from '@angular/core';
import {GetProfessorDTO} from "../../DTOs/ProfessorDTOs/get-professor-dto";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {Professor} from "../../Model/professor";
import {UpdateExamWithoutExamIdComponent} from "../update-exam-without-exam-id/update-exam-without-exam-id.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdateProfessorWithoutProfessorIdComponent} from "../update-professor-without-professor-id/update-professor-without-professor-id.component";
import {GetStudentDTO} from "../../DTOs/StudentDTOs/get-student-dto";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-get-professor',
  templateUrl: './get-professor.component.html',
  styleUrls: ['./get-professor.component.scss']
})
export class GetProfessorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'username', 'phone', 'removeProfessor', 'editProfessor'];
  panelOpenState = false;

  public professorName: string;
  public professorId: any;

  public ProfessorsByName: GetProfessorDTO[] = [];
  public AllProfessors: GetProfessorDTO[] = [];
  public professor: GetProfessorDTO;

  public dataSourceAllProfessors = new MatTableDataSource<GetProfessorDTO>();
  public dataSourceProfessorsByName= new MatTableDataSource<GetProfessorDTO>();
  private oldProfessor: GetProfessorDTO;

  constructor(public dialog: MatDialog, private readonly professorService: ProfessorService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

//=======================================getAllProfessorsByName========================================================================================================
  getAllProfessorsByName(name: string) {
    this.professorName = name;
    this.professorService.getAllProfessorsByName(name).subscribe((data: GetProfessorDTO[]) => {
        this.ProfessorsByName = data;
        this.dataSourceProfessorsByName.data = this.ProfessorsByName;
      },
      (err) => {
        this.notifyService.showError(err.error.message);
      }
    );
  }

  removeProfessorForGetAllProfessorsByNameFunction(id: number) {
    this.professorService.removeProfessor(id).subscribe((data: Professor) => {



      this.professorService.getAllProfessorsByName( this.professorName).subscribe((data: GetProfessorDTO[]) => {
          this.ProfessorsByName = data;
          this.dataSourceProfessorsByName.data = this.ProfessorsByName;
        },
        (err) => {
          this.dataSourceProfessorsByName.data = [];
        }
      );


    });
  }

  openDialogUpdateProfessorForGetAllProfessorsByNameFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateProfessorWithoutProfessorIdComponent, {
      data: {
        professorId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {


      this.professorService.getProfessor(id).subscribe((data: GetProfessorDTO) => {

          const professor = this.ProfessorsByName.find(professor => professor.id == id)

          if (professor) {
            this.oldProfessor = professor;
            var index = this.ProfessorsByName.indexOf(this.oldProfessor)
            this.ProfessorsByName[index] = data;
            this.dataSourceProfessorsByName.data = this.ProfessorsByName;
          }

        });




    });
  }

//======================================getProfessor=========================================================================================================
  getProfessor(id: number) {
    this.professorId = "";
    this.professorService.getProfessor(id).subscribe((data: GetProfessorDTO) => {
      this.professor = data;

    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeProfessorForGetProfessorFunction(id: number) {
    this.professorService.removeProfessor(id).subscribe((data: Professor) => {
      // @ts-ignore
      this.professor=null;
    });
  }

  openDialogUpdateProfessorForGetProfessorFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateProfessorWithoutProfessorIdComponent, {
      data: {
        professorId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {


      this.professorService.getProfessor(id).subscribe((data: GetProfessorDTO) => {
        this.professor = data;

      });

    });
  }

//======================================getAllProfessors=========================================================================================================
  getAllProfessors() {
    this.professorService.getAllProfessors().subscribe((data: GetProfessorDTO[]) => {
      this.AllProfessors = data;
      this.dataSourceAllProfessors.data = this.AllProfessors;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeProfessorForGetAllProfessorsFunction(id: number) {
    this.professorService.removeProfessor(id).subscribe((data: Professor) => {
      this.getAllProfessors();
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  openDialogUpdateProfessorForGetAllProfessorsFunction(id: number) {
    const dialogRef = this.dialog.open(UpdateProfessorWithoutProfessorIdComponent, {
      data: {
        professorId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProfessors()
    });
  }

}
