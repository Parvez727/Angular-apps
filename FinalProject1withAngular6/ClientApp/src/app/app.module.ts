import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeeAndAttendanceAngularComponentComponent } from './employee-and-attendance-angular-component/employee-and-attendance-angular-component.component';
import { EmployeeAndAttendanceComponentComponent } from './employee-and-attendance-component/employee-and-attendance-component.component';
import { EmployeeCardComponentComponent } from './employee-card-component/employee-card-component.component';
import { HolidayComponentComponent } from './holiday-component/holiday-component.component';
import { BonusComponentComponent } from './bonus-component/bonus-component.component';
import { SaleMasterAndDetailsComponentComponent } from './sale-master-and-details-component/sale-master-and-details-component.component';
import { EmployeeAndAttendanceNavbarComponentComponent } from './employee-and-attendance-navbar-component/employee-and-attendance-navbar-component.component';
import { SaleMasterAndDetailsNavbarComponentComponent } from './sale-master-and-details-navbar-component/sale-master-and-details-navbar-component.component';
import { HolidayNavbarComponentComponent } from './holiday-navbar-component/holiday-navbar-component.component';
import { BonusNavbarComponentComponent } from './bonus-navbar-component/bonus-navbar-component.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmployeeAndAttendanceAngularComponentComponent,
    EmployeeAndAttendanceComponentComponent,
    EmployeeCardComponentComponent,
    HolidayComponentComponent,
    BonusComponentComponent,
    SaleMasterAndDetailsComponentComponent,
    EmployeeAndAttendanceNavbarComponentComponent,
    SaleMasterAndDetailsNavbarComponentComponent,
    HolidayNavbarComponentComponent,
    BonusNavbarComponentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'employeeAndattendance', component: EmployeeAndAttendanceNavbarComponentComponent },
      { path: 'saleMaterAnddetails', component: SaleMasterAndDetailsNavbarComponentComponent },
      { path: 'holiday', component: HolidayNavbarComponentComponent },
      { path: 'bonus', component: BonusNavbarComponentComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
