import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataTable: any;
  selection: any;

  ngOnInit(): void {
    this.dataTable.DataTable();
  }

  data: any;
  constructor(private http: HttpClient) {
    //get request from web api
    this.http.get('http://localhost:8080/reports?symbol=AUD').subscribe((data: any) => {

      this.data = data;
      setTimeout(() => {
        $('#datatableexample').DataTable({
          "bPaginate": false,
          "bLengthChange": false,
          "bFilter": false,
          "bInfo": false,
          "bAutoWidth": false,
          "ordering": false
        });
      }, 1);
    }, (error: any) => console.error(error));
  }

  getSymbolData(theSymbol:string) {
    this.http.get('http://localhost:8080/reports?symbol=' + theSymbol).subscribe((data: any) => {
      this.data = data;
    }, (error: any) => console.error(error));

  }

  handleChange(theSymbol:string) {
    console.log("selected: " + theSymbol);
    this.getSymbolData(theSymbol);
  }
  
}