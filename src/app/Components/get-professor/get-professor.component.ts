import { Component, OnInit } from '@angular/core';
import {GetProfessorDTO} from "../../DTOs/ProfessorDTOs/get-professor-dto";
import {ProfessorService} from "../../Services/ProfessorService/professor.service";

@Component({
  selector: 'app-get-professor',
  templateUrl: './get-professor.component.html',
  styleUrls: ['./get-professor.component.scss']
})
export class GetProfessorComponent implements OnInit {

  public professorName:string;
  public professorId:any;
  panelOpenState = false;
  public ProfessorsByName : GetProfessorDTO[]=[];
  public AllProfessors : GetProfessorDTO[]=[];
  public professor: GetProfessorDTO;

  constructor(private readonly professorService: ProfessorService) {

  }

  ngOnInit(): void {

  }

  getAllProfessorsByName(name:string){
    this.professorName="";
    this.professorService.getAllProfessorsByName(name).subscribe((data: GetProfessorDTO[]) => {
      this.ProfessorsByName=data;
    });
  }

  getProfessor(id: number){
    this.professorId = "";
    this.professorService.getProfessor(id).subscribe((data: GetProfessorDTO) => {
      this.professor=data;

    });
  }

  getAllProfessors(){
    this.professorService.getAllProfessors().subscribe((data: GetProfessorDTO[]) => {
      this.AllProfessors=data;
    });
  }

}
