import {Professor} from "./professor";
import {Course} from "./course";

export interface ProfessorCourse {

  id: number;

  professor: Professor;
  course: Course;
}
