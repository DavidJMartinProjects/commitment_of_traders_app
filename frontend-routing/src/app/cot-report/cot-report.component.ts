import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-cot-report',
  templateUrl: './cot-report.component.html',
  styleUrls: ['./cot-report.component.scss']
})
export class CotReportComponent implements OnInit {

  data: any;

  constructor(private http: HttpClient, private router: Router, private keycloakService: KeycloakService) {
     //get request from web api
     this.http.get(`/api/reports?symbol=AUD`).subscribe((data: any) => {

      
      this.data = data;
      // setTimeout(() => {
      //   $('#datatableexample').DataTable({
      //     "bPaginate": false,
      //     "bLengthChange": false,
      //     "bFilter": false,
      //     "bInfo": false,
      //     "bAutoWidth": false,
      //     "ordering": false,
      //     "fixedHeader": true
      //   });
      // }, 1);
      console.log("data: " + data);
    }, (error: any) => console.error(error));

  }

  ngOnInit(): void {
    // this.router.navigate(['cot-report'])

    // console.log("calling backend /api.");
    // // this.http.get(`${environment.serverUrl}/reports?symbol=AUD`).subscribe((data: any) => {
    //   this.http.get(`/api/reports?symbol=AUD`).subscribe((data: any) => {
      
    //   this.data = data.message;
    // });
  }

  logout() {
    this.keycloakService.logout();
  }

}
