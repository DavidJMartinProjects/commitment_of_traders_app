import { ReportData } from './../_models/ReportData.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root"
})
export class RestClient {

    constructor(private httpClient: HttpClient) { }

    getReportBySymbol(symbol: string) {
        console.log('fetching events.');
        return this.httpClient.get<ReportData[]>('http://127.0.0.1:8080/reports?symbol=' + symbol, { responseType: "json" })
            .pipe(map((res: any) => {
                return res;
            }))
    }
    
}