
import {Course} from "./course";

export interface Professor {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  phone: string;
  courses: Course[];

}
