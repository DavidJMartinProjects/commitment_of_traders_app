import { DataSource } from '@angular/cdk/table';
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
  colData = [
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

  columnNames = [
    {
      id: 'report_date',
      value: 'Report Date.',

    }, {
      id: 'long',
      value: 'Long',
    },
    {
      id: 'short',
      value: 'Short',
    },
    {
      id: 'change_long',
      value: 'Change Long',
    }, {
      id: 'change_short',
      value: 'Change Short',
    },
    {
      id: 'percent_long',
      value: '% Long',
    }, , {
      id: 'percent_short',
      value: '% Short',
    },
    {
      id: 'net_positions',
      value: 'Net Positions',
    }];

constructor(private restClient: RestClient, ) {
  
}

data: any;
reports: ReportData[] = new Array();
observableReport = of(this.reports);


displayedColumns: string[];

ngOnInit() {
  this.displayedColumns = this.columnNames.map(x => x.id); 
   
}

rowData: any; 

  public getReportBySymbol(pair: string) {
  console.log("clicked " + pair);

  this.restClient.getReportBySymbol(pair).subscribe((response: any) => {
    console.log("response: " + response);
    this.reports = response
    // this.dataSource = response
  })
}

}
