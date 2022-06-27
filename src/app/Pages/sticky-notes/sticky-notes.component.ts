import {Component, OnInit} from '@angular/core';
import {GetStickyNoteDto} from "../../DTOs/StickyNoteDTOs/get-sticky-note-dto";
import {StickyNoteService} from "../../Services/StickyNoteService/sticky-note.service";
import {KeycloakService} from "keycloak-angular";
import {MatDialog} from "@angular/material/dialog";
import {RegisterStickyNotesComponent} from "../../Components/register-sticky-notes/register-sticky-notes.component";
import {StickyNote} from "../../Model/sticky-note";

@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.scss']
})

export class StickyNotesComponent implements OnInit {
  private studentUsername: string = "";
  public stickyNotes: GetStickyNoteDto[] = [];

  constructor(public dialog: MatDialog, private readonly stickyNoteService: StickyNoteService, private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.studentUsername = this.keycloakService.getUsername();
    this.stickyNoteService.getAllStickyNotesByStudentUsername(this.studentUsername).subscribe((data: GetStickyNoteDto[]) => {
      this.stickyNotes = data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegisterStickyNotesComponent);
    dialogRef.afterClosed().subscribe(result => {

      this.stickyNoteService.getAllStickyNotesByStudentUsername(this.studentUsername).subscribe((data: GetStickyNoteDto[]) => {
        this.stickyNotes = data;
      });
    });
  }

  removeStickyNote(id: number) {
    this.stickyNoteService.removeStickyNote(id).subscribe((data: StickyNote) => {
      this.stickyNoteService.getAllStickyNotesByStudentUsername(this.studentUsername).subscribe((data: GetStickyNoteDto[]) => {
        this.stickyNotes = data;
      });
    });
  }

}
