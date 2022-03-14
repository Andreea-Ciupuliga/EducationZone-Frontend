import {ProfessorCourse} from "./professor-course";

export interface Professor {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  phone: string;
  professorCourse: ProfessorCourse[];

}
