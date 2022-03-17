import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClientModule,
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';


@Component({
  selector: 'app-employee-card-component',
  templateUrl: './employee-card-component.component.html',
  styleUrls: ['./employee-card-component.component.css']
})
export class EmployeeCardComponentComponent implements OnInit {

 

  ngOnInit() {
  }
  public files: any[];
  items: any;
  constructor(public http: HttpClient, private route: Router) {
    this.files = [];
    this.http.get('/EmployeeAndAttendances/GetAllEmployees')
    .subscribe(data => {
      this.items = data;
      console.log(this.items);
      })
    
  }

  new() {
    this.route.navigate(['/'])
      .then(() => {
        window.location.href = 'https://localhost:44341/employeeAndattendance/';
        /*window.location.reload();*/
      });
  }

}
