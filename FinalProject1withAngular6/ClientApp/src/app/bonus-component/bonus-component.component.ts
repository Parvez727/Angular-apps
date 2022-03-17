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
  selector: 'app-bonus-component',
  templateUrl: './bonus-component.component.html',
  styleUrls: ['./bonus-component.component.css']
})
export class BonusComponentComponent implements OnInit {

 

  ngOnInit() {
  }

  bonus: any;
  sl: number = 0;
  bonusid2: string = "";
  bonusname2: string = "";
  percent2: number = 0;
  angForm: FormGroup;

  constructor(public http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder) {

    this.http.get('/CtrlBonus/GetAllBonus/')
      .subscribe(data => {
        this.bonus = data;
        /*console.log("here");*/
        console.log(this.bonus);
        /*alert(this.items);*/
      })
    this.sl = 0;

    this.route.queryParams.subscribe(params => {
      this.bonusid2 = params['bonusid'];
      this.BonusChange();
    })
    this.createForm();

  }

  createForm() {
    this.angForm = this.fb.group({
      bonusid: ['', Validators.required],
      bonusname: ['', Validators.required],
      percent: ['', Validators.required],
     
    });
  }


  BonusChange() {
    this.bonus = [];

    this.bonusname2 = "";
    this.percent2 = 0;
    this.http.get('/CtrlBonus/GetBonus/' + this.bonusid2)
      .subscribe(data => {
        if (data != "") {

          this.bonusname2 = data[0].bonusname;
          this.percent2 = data[0].percent;
          this.bonus = data;
        }

      })
  }

  addBonus(bonusid: string, bonusname: string, percent: number): void {
    var url =
      `bonusid=${this.bonusid2}&bonusname=${this.bonusname2}&percent=${this.percent2}`;
    this.http.get('/CtrlBonus/InsertBonus?' + url)
      .subscribe(data => {

        window.location.href = 'https://localhost:44341/bonus';


      })

  }


  updateBonus(bonusid: HTMLInputElement, bonusname: HTMLInputElement, percent: HTMLInputElement): void {
    this.bonus[this.sl].bonusid = bonusid.value;
    this.bonus[this.sl].bonusname = bonusname.value;
    this.bonus[this.sl].percent = percent.value;

    this.http.get('/CtrlBonus/DeleteBonus/' + this.bonusid2)
      .subscribe(data => {
        this.http.get('/CtrlBonus/InsertBonus?bonusid=' + bonusid.value + '&bonusname=' + bonusname.value + '&percent=' + percent.value)
          .subscribe(data => {
            window.location.href = 'https://localhost:44341/bonus';
          })
      })
  }

  deleteBonus(): void {
    this.http.get('/CtrlBonus/DeleteBonus/' + this.bonusid2)
      .subscribe(data => {
        window.location.href = 'https://localhost:44341/bonus';
      })
  }

  showBonus(id: number, bonusid1: string, bonusname1: string, percent1: number): void {
    this.sl = id;
    this.bonusid2 = bonusid1;
    this.bonusname2 = bonusname1;
    this.percent2 = percent1;

  }
}
