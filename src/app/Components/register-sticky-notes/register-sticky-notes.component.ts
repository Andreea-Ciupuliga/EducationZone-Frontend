import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StickyNoteService} from "../../Services/StickyNoteService/sticky-note.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-register-sticky-notes',
  templateUrl: './register-sticky-notes.component.html',
  styleUrls: ['./register-sticky-notes.component.scss']
})
export class RegisterStickyNotesComponent implements OnInit {

  registrationForm = this.fb.group({
    title: ['',],
    description: ['',],
    studentUsername: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private readonly stickyNoteService: StickyNoteService, private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    let stickyNoteRegisterDto = this.registrationForm.value;
    stickyNoteRegisterDto.studentUsername = this.keycloakService.getUsername();
    this.stickyNoteService.registerStickyNote(stickyNoteRegisterDto).subscribe((data: any) => {
    });
  }
}
