import {Course} from "./course";

export interface Exam {

  id: number;
  description: string;
  examDate: string;
  points: number;
  examRoom: string;
  examHour: string;

  course: Course;

}
