import {Course} from "./course";
import {Student} from "./student";

export interface Participants {

  id: number;
  examGrade: string;

  student: Student;
  course: Course;
}
