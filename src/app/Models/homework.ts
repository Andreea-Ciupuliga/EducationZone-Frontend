import {Course} from "./course";

export interface Homework {

  id: number;
  description: string;
  deadline: string;
  points: string;

  course: Course;
}
