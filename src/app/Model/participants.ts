import {Course} from "./course";
import {Student} from "./student";

export interface Participants {

  id: number;
  examGrade: number;

  student: Student;
  course: Course;
}
