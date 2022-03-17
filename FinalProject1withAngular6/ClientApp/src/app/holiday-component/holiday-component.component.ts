import { Component, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-holiday-component',
  templateUrl: './holiday-component.component.html',
  styleUrls: ['./holiday-component.component.css']
})
export class HolidayComponentComponent implements OnInit {

 
  ngOnInit() {
  }
  holiday: any;
  sl: number = 0;
  holidayid2: string = "";
  date2: string = "";
  reason2: string = "";
  angForm: FormGroup;

  constructor(public http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder) {
    
    this.http.get('/CtrlHoliday/GetAllHoliday/')
      .subscribe(data => {
        this.holiday = data;
        /*console.log("here");*/
        console.log(this.holiday);
        /*alert(this.items);*/
      })
    this.sl = 0;

    this.route.queryParams.subscribe(params => {
      this.holidayid2 = params['holidayid'];
      this.HolidayChange();
    })

    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      holidayid: ['', Validators.required],
      date: ['', Validators.required],
      reason: ['', Validators.required]
      
    });
  }

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
  }

  HolidayChange() {
    this.holiday = [];

    this.date2 = "";
    this.reason2 = "";
    this.http.get('/CtrlHoliday/GetHoliday/' + this.holidayid2)
      .subscribe(data => {
        if (data != "") {

          this.date2 = this.convertDate(data[0].date);
          this.reason2 = data[0].reason;
          this.holiday = data;
        }

      })
  }

  addHoliday(holidayid: string, date: Date, reason: string): void {
    var url =
      `holidayid=${this.holidayid2}&date=${this.date2}&reason=${this.reason2}`;
    this.http.get('/CtrlHoliday/InsertHoliday?' + url)
      .subscribe(data => {

        window.location.href = 'https://localhost:44341/holiday/';


      })

  }


  updateHoliday(holidayid: HTMLInputElement, date: HTMLInputElement, reason: HTMLInputElement): void {
    this.holiday[this.sl].holidayid = holidayid.value;
    this.holiday[this.sl].date = date.value;
    this.holiday[this.sl].reason = reason.value;

    this.http.get('/CtrlHoliday/DeleteHoliday/' + this.holidayid2)
      .subscribe(data => {
        this.http.get('/CtrlHoliday/InsertHoliday?holidayid=' + holidayid.value + '&date=' + date.value + '&reason=' + reason.value)
          .subscribe(data => {
            window.location.href = 'https://localhost:44341/holiday/';
          })
      })
  }

  deleteHoliday(): void {
    this.http.get('/CtrlHoliday/DeleteHoliday/' + this.holidayid2)
      .subscribe(data => {
        window.location.href = 'https://localhost:44341/holiday/';
      })
  }

  showHoliday(id: number, holidayid1: string, date1: Date, reason1: string): void {
    this.sl = id;
    this.holidayid2 = holidayid1;
    this.date2 = this.convertDate(new Date(date1));
    this.reason2 = reason1;
  
  }



}
