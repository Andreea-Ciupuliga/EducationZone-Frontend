import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  title = 'Education Zone';
  isAdmin:boolean =false;
  roles=this.keycloakService.getUserRoles();
  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {

    this.roles.forEach(value=>{
      if (value == 'ROLE_ADMIN')
        this.isAdmin=true;
    })

    console.log("roluri student curent: ",this.roles)
  }

  logout() {
    this.keycloakService.logout();
  }

}
