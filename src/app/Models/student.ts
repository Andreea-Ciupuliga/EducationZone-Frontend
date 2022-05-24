import {Participants} from "./participants";
import {StickyNote} from "./sticky-note";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  groupNumber: string;
  phone: string;
  year: string;
  department: string;
  participants: Participants[];
  stickyNotes: StickyNote[];




}
