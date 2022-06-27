import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";
import {Professor} from "../../Model/professor";

@Component({
  selector: 'app-remove-professor-confirmation-dialog',
  templateUrl: './remove-professor-confirmation-dialog.component.html',
  styleUrls: ['./remove-professor-confirmation-dialog.component.scss']
})
export class RemoveProfessorConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly professorService: ProfessorService) {
  }

  ngOnInit(): void {
  }

  removeProfessor() {
    let professorId = this.data.professorId;
    this.professorService.removeProfessor(professorId).subscribe((data: Professor) => {
    });
  }

}
