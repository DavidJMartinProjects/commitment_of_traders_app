import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: (arg0: string) => { (): any; new(): any; DataTable: { (arg0: { pagingType: string; pageLength: number; processing: boolean; lengthMenu: number[]; }): void; new(): any; }; };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataTable: any;

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
          pagingType: 'full_numbers',
          pageLength: 30,
          processing: true,
          lengthMenu: [5, 10, 25]
        });
      }, 1);
    }, (error: any) => console.error(error));
  }
}