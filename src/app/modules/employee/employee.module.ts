import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ECInformationComponent } from './dashboard/ec-information/ec-information.component';
import { DcInformationComponent } from './dashboard/dc-information/dc-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DashboardComponent,
    ECInformationComponent,
    DcInformationComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    EmployeeRoutingModule,
    MatTabsModule,
    HttpClientModule,
  ]
})
export class EmployeeModule { }
