import { Component, OnInit } from '@angular/core';
import {GetHomeworkDTO} from "../../DTOs/HomeworkDTOs/get-homework-dto";
import {HomeworkService} from "../../Services/HomeworkService/homework.service";

@Component({
  selector: 'app-get-homework',
  templateUrl: './get-homework.component.html',
  styleUrls: ['./get-homework.component.scss']
})
export class GetHomeworkComponent implements OnInit {


  public homeworkId:any;
  panelOpenState = false;
  public AllHomeworks : GetHomeworkDTO[]=[];
  public homework: GetHomeworkDTO;

  constructor(private readonly homeworkService: HomeworkService) {

  }

  ngOnInit(): void {

  }

  getHomework(id: number){
    this.homeworkId = "";
    this.homeworkService.getHomework(id).subscribe((data: GetHomeworkDTO) => {
      this.homework=data;
    });
  }

  getAllHomeworks(){
    this.homeworkService.getAllHomeworks().subscribe((data: GetHomeworkDTO[]) => {
      this.AllHomeworks=data;
    });
  }

}
