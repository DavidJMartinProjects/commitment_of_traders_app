import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BannerComponent } from './banner/banner.component';
import { CotReportComponent } from './cot-report/cot-report.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio'
import { environment } from 'src/environments/environment';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloak.issuer,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    BannerComponent,
    CotReportComponent
  ],
  imports: [
    HttpClientModule,
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    MatRadioModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    // add this provider
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }