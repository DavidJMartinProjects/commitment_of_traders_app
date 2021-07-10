import { ReportData } from './../_models/ReportData.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'commitment of traders report.';

  colData = [
    {pair: 'AUS'}, 
    {pair: 'CAD'},
    {pair: 'EUR'}, 
    {pair: 'JPY'}, 
    {pair: 'GBP'}, 
    {pair: 'MXN'}, 
    {pair: 'ZAR'}, 
    {pair: 'RUB'}, 
    {pair: 'BTC'}
  ]; 

  rowData: any; 

  successAlert = false;

  getReportBySymbol(pair: string) {
    console.log("clicked " + pair);
  }

  copyToClipboard(value: string): void {
    const tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    this.successAlert = true;

    setTimeout(() => {
      this.successAlert = false;
    }, 900);
  }
}
