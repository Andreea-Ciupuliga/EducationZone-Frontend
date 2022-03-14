import {Participants} from "./participants";
import {ProfessorCourse} from "./professor-course";
import {Homework} from "./homework";
import {Exam} from "./exam";

export interface Course {

  id: number;
  name: string;
  numberOfStudents: number;
  description: string;
  semester: string;
  year: string;

  participants: Participants[];
  professorCourse: ProfessorCourse[];
  homeworks: Homework[];
  exam: Exam;

}
