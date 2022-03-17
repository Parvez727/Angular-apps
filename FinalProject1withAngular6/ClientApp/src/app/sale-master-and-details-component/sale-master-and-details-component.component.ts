import { Component, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-sale-master-and-details-component',
  templateUrl: './sale-master-and-details-component.component.html',
  styleUrls: ['./sale-master-and-details-component.component.css']
})
export class SaleMasterAndDetailsComponentComponent implements OnInit {

  ngOnInit() {
  }

  
  saledetails: any;
  sl: number = 0;
  saleid2: string = "";
  masterdate2: string = "";
  partyid2: string = "";
  total2: number ;
  discount2: number = 0;
  net2: number = 0;
  paid2: number = 0;
  due2: number = 0;
  slno2: number = 0;
  itemcode2: string = "";
  detaildate2: string = "";
  costprice2: number = 0;
  qty2: number = 0;
  total3: number = 0;
 
 
  constructor(public http: HttpClient, private route: ActivatedRoute) {
  
    this.http.get('/SaleMasterAndDetails/GetAllSaledetail')
      .subscribe(data => {
        this.saledetails = data;
        console.log(this.saledetails);
      })
    this.sl = 0;

    this.route.queryParams.subscribe(params => {
      this.saleid2 = params['saleid'];
      this.Saleschange();
      this.TotalChange();
      this.FinalValue()
    })
    
  }

  //createForm() {
  //  this.angForm = this.fb.group({
  //    departmentid: ['', Validators.required],
  //    subjectname: ['', Validators.required],
  //    location: ['', Validators.required],
  //    studentid: ['', Validators.required],
  //    studentname: ['', Validators.required],
  //    studentclass: ['', Validators.required],
  //    gender: ['', Validators.required],
  //    present: ['', Validators.required],
  //    date: ['', Validators.required],
  //    picture: ['', Validators.required],
  //    payment: ['', Validators.required],

  //  });
  //}

  TotalChange() {
    this.total3 = this.costprice2 * this.qty2;
  }

  FinalValue() {
    this.net2 = this.total2 - this.discount2;
    this.due2 = this.net2 - this.paid2
  }


  Saleschange() {
    this.saledetails = [];
    
    this.masterdate2 = "";
    this.partyid2 = "";
    /*this.total2 = 0;*/
    this.discount2 = 0;
    this.net2 = 0;
    this.paid2 = 0;
    this.due2 = 0;

    this.http.get('/SaleMasterAndDetails/GetSalemaster/' + this.saleid2)
      .subscribe(data => {
        if (data != "") {

          this.masterdate2 = this.converDate(data[0].masterdate);
          this.partyid2 = data[0].partyid;
          this.total2 = data[0].total;
          this.discount2 = data[0].discount;
          this.net2 = data[0].net;
          this.paid2 = data[0].paid;
          this.due2 = data[0].due;
        
          this.showsaledetails();
        }
      })
  }

  showsaledetails() {
    this.http.get('/SaleMasterAndDetails/GetSaledetail/' + this.saleid2)
      .subscribe(data => {
        this.saledetails = data;
        console.log(this.saledetails);
      })
    this.sl = 0;
  }



  addsaledetails(saleid: string, slno: number, itemcode: string, detaildate: Date, costprice: number, qty: number, total: number): void {
    this.saledetails.push({
      saleid: saleid,
      slno: slno,
      itemcode: itemcode,
      detaildate: detaildate,
      costprice: costprice,
      qty: qty,
      total: total,
    })

    /*this.saleid2 = "";*/
    this.slno2 = 0;
    this.itemcode2 = "";
    this.detaildate2 = "";
    this.costprice2 = 0;
    this.qty2 = 0;
    this.total3 = 0;

  }


  converDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')

  }

  show(id: number, saleid1: string, slno1: number, itemcode1: string, detaildate1: Date, costprice1: number, qty1: number, total1: number): void {

    this.sl = id;
    this.saleid2 = saleid1;
    this.slno2 = slno1;
    this.itemcode2 = itemcode1;
    this.detaildate2 = this.converDate(new Date(detaildate1));
    this.costprice2 = costprice1;
    this.qty2 = qty1;
    this.total3 = total1;
    this.total2 = total1;
   
  }


  updateSaledetail(saleid: HTMLInputElement, slno: HTMLInputElement, itemcode: HTMLInputElement, detaildate: HTMLInputElement, costprice: HTMLInputElement,
    qty: HTMLInputElement, total: HTMLInputElement): void {
    this.saledetails[this.sl].saleid = saleid.value;
    this.saledetails[this.sl].slno = slno.value;
    this.saledetails[this.sl].itemcode = itemcode.value;
    this.saledetails[this.sl].detaildate = detaildate.value;
    this.saledetails[this.sl].costprice = costprice.value;
    this.saledetails[this.sl].qty = qty.value;
    this.saledetails[this.sl].total = total.value;
    /*this.students[this.sl].departmentid = departmentid.value;*/

    this.http.get('/SaleMasterAndDetails/DeleteSaledetail/' + this.saleid2)
      .subscribe(data => {
        this.http.get('/SaleMasterAndDetails/InsertSaledetail?saleid=' + saleid.value + '&slno=' + slno.value + '&itemcode=' + itemcode.value + '&detaildate=' + detaildate.value +
          '&costprice=' + costprice.value + '&qty=' + qty.value + '&total=' + total.value)
          .subscribe(data => {
            window.location.href = 'https://localhost:44341/saleMaterAnddetails/';
          })
      })


  }


  deleteSaledetails(): void {
    this.saledetails.splice(this.sl, 1);
   /* this.saleid2 = "";*/
    this.slno2 = 0;
    this.itemcode2 = "";
    this.detaildate2 = "";
    this.costprice2 = 0;
    this.qty2 = 0;
    this.total3 = 0;
  }

  deleteAll(): void {
    this.http.get('/SaleMasterAndDetails/DeleteAll/' + this.saleid2)
      .subscribe(data => {
        window.location.href = 'https://localhost:44341/saleMaterAnddetails/';
      })
  }



  saveAll(): void {
    alert(this.saleid2);
    var i = 0;
    this.http.get('/SaleMasterAndDetails/DeleteAll/' + this.saleid2)
      .subscribe(data => {
        var url =
          `saleid=${this.saleid2}&masterdate=${this.masterdate2}&partyid=${this.partyid2}&total=${this.total2}&discount=${this.discount2}&net=${this.net2}&paid=${this.paid2}&due=${this.due2}`;
        this.http.get('SaleMasterAndDetails/InsertSalemaster?' + url)
          .subscribe(data => {
            for (let value of this.saledetails) {
              var url1 =
                `saleid=${this.saleid2}&slno=${value.slno}&itemcode=${value.itemcode}&detaildate=${value.detaildate}&costprice=${value.costprice}&qty=${value.qty}&total=${value.total}`;
              this.http.get('/SaleMasterAndDetails/InsertSaledetail?' + url1)
                .subscribe(data => {
                  i++;
                  if (i == this.saledetails.length) {
                    window.location.href = 'https://localhost:44341/saleMaterAnddetails/';
                  }
                })
            }
          })
      })

  }

}
