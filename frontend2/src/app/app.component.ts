import { DataSource } from '@angular/cdk/table';
import { ReportData } from './../_models/ReportData.model';
import { Component, OnInit } from '@angular/core';
import { RestClient } from 'src/_services/backend.rest.client';
import { of } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

export class ReportCol {  
  id: string = "";
  value: string = "";

  constructor(id: string, value:string) {
    this.id = id;
    this.value = value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));  

  constructor( private restClient: RestClient) {
 
  }


  title = 'commitment of traders report.';
  symbols = [
    { pair: 'AUD' },
    { pair: 'CAD' },
    { pair: 'CHF' },
    { pair: 'EUR' },
    { pair: 'JPY' },
    { pair: 'GBP' },
    { pair: 'MXN' },
    { pair: 'ZAR' },
    { pair: 'RUB' },
    { pair: 'BTC' }
  ];


data: any;
reports: ReportData[] = new Array();
observableReport = of(this.reports);
selectedValue: string = "";
dataSource = this.observableReport;

displayedColumns: string[] = ['date', 'long', 'shorty', 'changeLong', 'changeShort', 'percentLong', 'percentShort', 'netPositions'];

ngOnInit() {
}

  public getReportBySymbol(data: any) {
  console.log("clicked " + data);

  this.restClient.getReportBySymbol(data).subscribe((response: any) => {
    console.log("response: " + response);
    this.reports = response
    this.dataSource = response
  })
}

}
