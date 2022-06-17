import { Injectable } from '@angular/core';
import {ApiService} from "../Api/api.service";
import {RegisterStickyNoteDto} from "../../DTOs/StickyNoteDTOs/register-sticky-note-dto";
import {StickyNote} from "../../Model/sticky-note";

@Injectable({
  providedIn: 'root'
})
export class StickyNoteService {

  private readonly endpoint = '/stickyNote';
  constructor(private apiService : ApiService) { }

  registerStickyNote(stickyNoteRegisterDTO:RegisterStickyNoteDto) {
    return this.apiService.post<StickyNote>(this.endpoint + '/register',stickyNoteRegisterDTO);
  }

  removeStickyNote(id: number){
    return this.apiService.delete(this.endpoint+'/'+id);
  }

  getAllStickyNotesByStudentUsername(username: string){
    return this.apiService.get<StickyNote>(this.endpoint + '/getAllByStudentUsername/'+username);
  }

}
