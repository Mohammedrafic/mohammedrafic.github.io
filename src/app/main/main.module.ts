import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MainRoutingModule } from './main-routing.module';
import { LocationComponent } from './location/location.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { PeopleModule } from './people/people.module';
import { AttendanceModule } from './attendance/attendance.module';

@NgModule({
  declarations: [
    MainComponent,
    EmployeeListComponent,
    LocationComponent,
    FeedBackComponent
    ],
  imports: [
    CommonModule,
    AgGridAngular,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MainRoutingModule,
    PeopleModule,
    AttendanceModule
  ],
  providers: [],
})
export class MainModule { }
