import { ReportData } from './../_models/ReportData.model';
import { Component } from '@angular/core';
import { RestClient } from 'src/_services/backend.rest.client';

import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'commitment of traders report.';

  constructor(private restClient: RestClient) {
    // this.getReportBySymbol('AUD');   
  }

  data: any; 
  reports: ReportData[] = new Array();
  observableReport = of(this.reports);

  colData = [
    {pair: 'AUD'}, 
    {pair: 'CAD'},
    {pair: 'CHF'},
    {pair: 'EUR'}, 
    {pair: 'JPY'}, 
    {pair: 'GBP'}, 
    {pair: 'MXN'}, 
    {pair: 'ZAR'}, 
    {pair: 'RUB'}, 
    {pair: 'BTC'}
  ]; 

  rowData: any; 

  public getReportBySymbol(pair: string) {
    console.log("clicked " + pair);    

    this.restClient.getReportBySymbol(pair).subscribe((response: any) => {
      console.log("response: " + response);
      this.reports = response
    })
  }

}
