import {Component, OnInit} from '@angular/core';
import {GetProfessorDTO} from "../../DTOs/ProfessorDTOs/get-professor-dto";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {Professor} from "../../Model/professor";
import {UpdateExamWithoutExamIdComponent} from "../update-exam-without-exam-id/update-exam-without-exam-id.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdateProfessorWithoutProfessorIdComponent} from "../update-professor-without-professor-id/update-professor-without-professor-id.component";

@Component({
  selector: 'app-get-professor',
  templateUrl: './get-professor.component.html',
  styleUrls: ['./get-professor.component.scss']
})
export class GetProfessorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'username', 'phone', 'removeProfessor','editProfessor'];
  panelOpenState = false;

  public professorName: string;
  public professorId: any;

  public ProfessorsByName: GetProfessorDTO[] = [];
  public AllProfessors: GetProfessorDTO[] = [];
  public professor: GetProfessorDTO;

  constructor(public dialog: MatDialog, private readonly professorService: ProfessorService, private notifyService: NotificationService) {

  }

  ngOnInit(): void {

  }

  getAllProfessorsByName(name: string) {
    this.professorName = "";
    this.professorService.getAllProfessorsByName(name).subscribe((data: GetProfessorDTO[]) => {
        this.ProfessorsByName = data;
      },
      (err) => {
        this.notifyService.showError(err.error.message);
      }
    );
  }

  getProfessor(id: number) {
    this.professorId = "";
    this.professorService.getProfessor(id).subscribe((data: GetProfessorDTO) => {
      this.professor = data;

    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  getAllProfessors() {
    this.professorService.getAllProfessors().subscribe((data: GetProfessorDTO[]) => {
      this.AllProfessors = data;
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeProfessor(id: number) {
    this.professorService.removeProfessor(id).subscribe((data: Professor) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  openDialogUpdateProfessor(id: number) {
    const dialogRef = this.dialog.open(UpdateProfessorWithoutProfessorIdComponent, {
      data: {
        professorId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
