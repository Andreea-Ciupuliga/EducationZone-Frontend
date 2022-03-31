import {Component, OnInit} from '@angular/core';
import {ProfessorService} from "../../Services/ProfessorService/professor.service";
import {Professor} from "../../Models/professor";
import {Student} from "../../Models/student";
import {StudentService} from "../../Services/StudentService/student.service";
import {NotificationService} from "../../Services/NotificationService/notification.service";

@Component({
  selector: 'app-remove-professor',
  templateUrl: './remove-professor.component.html',
  styleUrls: ['./remove-professor.component.scss']
})
export class RemoveProfessorComponent implements OnInit {

  constructor(private readonly professorService: ProfessorService, private notifyService: NotificationService) {
  }

  public professorId: any;

  ngOnInit(): void {
  }

  removeProfessor(id: number) {
    this.professorId = "";
    this.professorService.removeProfessor(id).subscribe((data: Professor) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

  removeAllProfessors() {
    this.professorService.removeAllProfessors().subscribe((data: Student) => {
    }, (err) => {
      this.notifyService.showError(err.error.message);
    })
  }
}
