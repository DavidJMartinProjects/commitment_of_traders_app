import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { CotReportComponent } from './cot-report/cot-report.component';
// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: CotReportComponent,
    canActivate: [AuthGuard],
    // The user need to have this roles to access
    data: { roles: ['User'] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule], providers: [AuthGuard]
  exports: [RouterModule], providers: []
})
export class AppRoutingModule {} 