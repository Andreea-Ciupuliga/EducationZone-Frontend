import {Student} from "./student";

export interface StickyNote {
  id: number;
  title: string;
  description: string;

  student: Student;
}
