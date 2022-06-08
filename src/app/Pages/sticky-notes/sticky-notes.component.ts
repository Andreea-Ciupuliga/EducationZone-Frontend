import {Component, Injectable, OnInit} from '@angular/core';
import {GetStickyNoteDto} from "../../DTOs/StickyNoteDTOs/get-sticky-note-dto";
import {StickyNoteService} from "../../Services/StickyNoteService/sticky-note.service";
import {KeycloakService} from "keycloak-angular";
import {MatDialog} from "@angular/material/dialog";
import {RegisterStickyNotesComponent} from "../../Components/register-sticky-notes/register-sticky-notes.component";
import {Homework} from "../../Models/homework";
import {StickyNote} from "../../Models/sticky-note";
import {FormBuilder} from "@angular/forms";
import {NotificationService} from "../../Services/NotificationService/notification.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.scss']
})

export class StickyNotesComponent implements OnInit {
  private studentUsername: string = "";
  public stickyNotes: GetStickyNoteDto[] = [];

  constructor(private router: Router,public dialog: MatDialog,private readonly stickyNoteService: StickyNoteService,private keycloakService: KeycloakService, private notifyService: NotificationService) {
  }

  ngOnInit(): void {


    this.studentUsername=this.keycloakService.getUsername();
    this.stickyNoteService.getAllStickyNotesByStudentUsername(this.studentUsername).subscribe((data: GetStickyNoteDto[]) => {
      this.stickyNotes = data;
      console.log(this.stickyNotes)
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegisterStickyNotesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }

  removeStickyNote(id: number) {

    this.stickyNoteService.removeStickyNote(id).subscribe((data: StickyNote) => {
      this.ngOnInit();
    }, (err) => {
      this.notifyService.showError(err.error.message);
    });
  }

}
