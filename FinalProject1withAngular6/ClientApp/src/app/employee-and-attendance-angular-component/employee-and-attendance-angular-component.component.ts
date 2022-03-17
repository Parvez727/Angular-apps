import { Component, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee-and-attendance-angular-component',
  templateUrl: './employee-and-attendance-angular-component.component.html',
  styleUrls: ['./employee-and-attendance-angular-component.component.css']
})
export class EmployeeAndAttendanceAngularComponentComponent implements OnInit {

  

  ngOnInit(): void {
  }

  public files: any[];
  items: any;
  employeed: any;
  departmented: any;
  sl: number = 0;
  employeeid2: string = "";
  name2: string = "";
  activesection2: string = "";
  joindate2: string = "";
  picture2: string = "";
  isactive2: boolean = true;
  attendanceid2: string = "";
  slno2: number = 0;
  presenttime2: string = "";
  departmentid2: string = "";
  departmentname2: string = "";
  angForm: FormGroup;
  constructor(public http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder) {
    this.files = [];
    //this.http.get('/EmployeeAndAttendances/GetAllEmployees')
    //  .subscribe(data => {
    //    this.employeed = data;
    //    console.log(this.employeed);
    //  })
    //this.sl = 0;

    this.http.get('/EmployeeAndAttendances/GetAllAttendance/')
      .subscribe(data => {
        this.items = data;
        /*console.log("here");*/
        console.log(this.items);
        /*alert(this.items);*/
      })
    this.sl = 0;
    this.http.get('/EmployeeAndAttendances/GetAllDepartment')
      .subscribe(data => {
        this.departmented = data;
        console.log(this.departmented);
      })

    this.route.queryParams.subscribe(params => {
      this.employeeid2 = params['employeeid'];
      this.EmployeeChange();
    })

    this.createForm();

  }

  

  EmployeeChange() {
    this.items = [];
   
    this.name2 = "";
    this.departmentid2 = "";
    this.activesection2 = "";
    this.joindate2 = "";
    this.isactive2 = true;
    this.picture2 = "";

    this.http.get('/EmployeeAndAttendances/GetEmployees/' + this.employeeid2)
      .subscribe(data => {
        if (data != "") {
          this.name2 = data[0].name;
          this.departmentid2 = data[0].departmentid;
          this.activesection2 = data[0].activesection;
          this.joindate2 = this.convertDate(data[0].joindate);
          this.isactive2 = data[0].isactive;
          this.picture2 = data[0].picture;
          this.showAttendance();
          //alert(this.joindate2);
          /*this.employeed = data;*/
          
        }
       
      })
  }

 

  showAttendance() {
    // alert("here")
    this.http.get('/EmployeeAndAttendances/GetAttendance/' + this.employeeid2)
      .subscribe(data => {
        this.items = data;
        console.log(this.items);
       /* alert(this.items);*/
      });
    this.sl = 0;
    // dataService.test = "hello";
  }

  show(id: number, attendanceid1: string, slno1: number, presenttime1: Date): void {
    this.sl = id;
    this.attendanceid2 = attendanceid1;
    this.slno2 = slno1;
    //alert(this.convertDate(e))
    this.presenttime2 = this.convertDate(presenttime1);

    /*this.presenttime2 = this.convertDate(e);*/

  }


  createForm() {
    this.angForm = this.fb.group({
      employeeid: ['', Validators.required],
      name: ['', Validators.required],
     
      activesection: ['', Validators.required],
      joindate: ['', Validators.required],
      isactive: ['', Validators.required],
      picture: ['', Validators.required],
      attendanceid: ['', Validators.required],
      slno: ['', Validators.required],
      presenttime: ['', Validators.required],
    });

  }

  onFileChanged(event: any) {
    this.files = event.target.files;
    const formData = new FormData();
    formData.append('files', this.files[0]);
    this.http.post('/EmployeeAndAttendances/Post/', formData).subscribe(data => {
      this.picture2 = this.files[0].name
    });
  }



  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
  }

  addAttendance(attendanceid: string, slno: number, presenttime: Date): void {
    this.items.push({
      attendanceid: attendanceid,
      slno: slno,
      presenttime: presenttime,
    })

    this.attendanceid2 = "";
    this.slno2 = 0;
    this.presenttime2 = "";
    

  }

  saveAll(): void {
    var i = 0;
    this.http.get('/EmployeeAndAttendances/DeleteAllEmployeeAndAttendance/' + this.employeeid2)
      .subscribe(data => {
        alert("deleted")
        var url =
          `employeeid=${this.employeeid2}&name=${this.name2}&departmentid=${this.departmentid2}&activesection=${this.activesection2}&joindate=${this.joindate2}&isactive2=${this.isactive2}&picture=${this.picture2}`;
        this.http.get('/EmployeeAndAttendances/InsertEmployee?' + url)
          .subscribe(data => {
            for (let value of this.items) {
             
              var url1 =
                `attendanceid=${value.attendanceid}&slno=${value.slno}&employeeid=${this.employeeid2}&presenttime=${value.presenttime}`;
              this.http.get('/EmployeeAndAttendances/InsertAttendance?' + url1)
                .subscribe(data => {
                  i++;
                  if (i == this.items.length) {
                    window.location.href = 'https://localhost:44341/employeeAndattendance/';
                  }
                })
            }
          })
      })
  }

  updateEmployee(employeeid: HTMLInputElement, name: HTMLInputElement, departmentid: HTMLInputElement, activesection: HTMLInputElement, joindate: HTMLInputElement,
    isactive: HTMLInputElement): void {
    this.employeed[this.sl].employeeid = employeeid.value;
    this.employeed[this.sl].name = name.value;
    this.employeed[this.sl].departmentid = departmentid.value;
    this.employeed[this.sl].activesection = activesection.value;
    this.employeed[this.sl].joindate = joindate.value;
    this.employeed[this.sl].isactive = isactive.value;

    this.employeeid2 = "";
    this.name2 = "";
    this.departmentid2 = "";
    this.activesection2 = "";
    this.joindate2 = "";
    this.isactive2 = true;
  }

  updateAttendance(attendanceid: HTMLInputElement, slno: HTMLInputElement, employeeid: HTMLInputElement, presenttime: HTMLInputElement): void {
    this.items[this.sl].attendanceid = attendanceid.value;
    this.items[this.sl].slno = slno.value;
    this.items[this.sl].presenttime = presenttime.value;

    this.http.get('/EmployeeAndAttendances/DeleteAttendanceByattendanceid/' + this.attendanceid2)
      .subscribe(data => {
        this.http.get('/EmployeeAndAttendances/InsertAttendance?attendanceid=' + attendanceid.value + '&slno=' + slno.value + '&employeeid=' + employeeid.value + '&presenttime=' + presenttime.value)
          .subscribe(data => {
            window.location.href = 'https://localhost:44341/employeeAndattendance/';
          })
      })

    //this.attendanceid2 = "";
    //this.slno2 = 0;
    //this.presenttime2 = "";
  
  }


  deleteAttendance(): void {
    this.items.splice(this.sl, 1);
    this.attendanceid2 = "";
    this.slno2 = 0;
    this.presenttime2 = "";
   
  }

  deleteAll(): void {
    this.http.get('/EmployeeAndAttendances/DeleteAllEmployeeAndAttendance/' + this.employeeid2)
      .subscribe(data => {
        window.location.href = 'https://localhost:44341/employeeAndattendance/';
      })
  }


}
