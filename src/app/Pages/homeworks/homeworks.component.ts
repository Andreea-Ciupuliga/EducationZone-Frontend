import { Component, OnInit } from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {
  private studentId: number = 9;
  public Homeworks: GetHomeworkDTO[] = [];
  constructor(private readonly homeworkService:HomeworkService) { }

  ngOnInit(): void {
    this.getAllHomeworksByStudentId();
  }
  getAllHomeworksByStudentId(){
    this.homeworkService.getAllHomeworksByStudentId(this.studentId).subscribe((data: GetHomeworkDTO[]) => {         //daca nu scriem .subscribe nu o sa se faca requestul
      this.Homeworks = data;
      console.log(this.Homeworks)
    });
  }
}
