import {Participants} from "./participants";
import {Homework} from "./homework";
import {Exam} from "./exam";
import {Professor} from "./professor";

export interface Course {

  id: number;
  name: string;
  numberOfStudents: number;
  description: string;
  semester: string;
  year: string;

  participants: Participants[];
  professor: Professor;
  homeworks: Homework[];
  exam: Exam;

}
