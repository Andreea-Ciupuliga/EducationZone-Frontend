import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {RegisterStickyNotesComponent} from "../register-sticky-notes/register-sticky-notes.component";
import {MatDialog} from "@angular/material/dialog";
import {ContactComponent} from "../../Pages/contact/contact.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  title = 'Education Zone';
  isAdmin: boolean = false;
  roles = this.keycloakService.getUserRoles();

  constructor(public dialog: MatDialog, private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {

    this.roles.forEach(value => {
      if (value == 'ROLE_ADMIN')
        this.isAdmin = true;
    })

  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  logout() {
    this.keycloakService.logout();
  }

}
