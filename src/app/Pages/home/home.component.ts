import {Component, OnInit} from '@angular/core';
import {ParticipantsService} from "../../Services/ParticipantsService/participants.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isStudent:boolean =false;
  isProfessor:boolean =false;
  isAdmin:boolean =false;
  roles=this.keycloakService.getUserRoles();

  constructor(private readonly participantsService: ParticipantsService,private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.roles.forEach(value=>{
      if (value == 'ROLE_STUDENT')
        this.isStudent=true;
      if (value == 'ROLE_PROFESSOR')
        this.isProfessor=true;
      if (value == 'ROLE_ADMIN')
        this.isAdmin=true;
    })

    console.log("roluri user curent: ",this.roles)
  }
}
