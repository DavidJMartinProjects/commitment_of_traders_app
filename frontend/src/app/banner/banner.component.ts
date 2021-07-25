import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
  }

  logout() {
    this.keycloakService.logout();
  }

}
