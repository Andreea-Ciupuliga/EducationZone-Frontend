import { Component, OnInit } from '@angular/core';
import {HomeworkService} from "../../Services/HomeworkService/homework.service";
import {Homework} from "../../Models/homework";

@Component({
  selector: 'app-remove-homework',
  templateUrl: './remove-homework.component.html',
  styleUrls: ['./remove-homework.component.scss']
})
export class RemoveHomeworkComponent implements OnInit {

  constructor(private readonly homeworkService: HomeworkService) {
  }

  public homeworkId: any;

  ngOnInit(): void {
  }

  removeHomework(id: number) {
    this.homeworkId = "";
    this.homeworkService.removeHomework(id).subscribe((data: Homework) => {
    });
  }

}
