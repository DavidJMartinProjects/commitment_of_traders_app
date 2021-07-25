import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

declare var $: any;

@Component({
  selector: 'app-cot-report',
  templateUrl: './cot-report.component.html',
  styleUrls: ['./cot-report.component.css']
})
export class CotReportComponent implements OnInit {

  data: any;
  selection: string = 'AUD';
  showSpinner = true;

  constructor(private http: HttpClient, private router: Router, private keycloakService: KeycloakService) {
    //get request from web api
    console.log('GET /api/reports?symbol=AUD')
    this.http.get(`/api/reports?symbol=AUD`).subscribe((data: any) => {
      this.data = data;
      this.showSpinner = false;
      setTimeout(() => {
        $('#datatableexample').DataTable({
          "bPaginate": false,
          "bLengthChange": false,
          "bFilter": false,
          "bInfo": false,
          "bAutoWidth": false,
          "ordering": false,
          "fixedHeader": false
        });
      }, 1);

      
    }, (error: any) => console.error(error));
  }

  ngOnInit(): void {
  }

  logout() {
    this.keycloakService.logout();
  }

  getSymbolData(theSymbol: string) {
    console.log('GET /api/reports?symbol=' + theSymbol)
    this.http.get('/api/reports?symbol=' + theSymbol).subscribe((data: any) => {
      this.data = data;
    }, (error: any) => console.error(error));

  }

  handleChange(theSymbol: string) {    
    this.getSymbolData(theSymbol);
  }

}
