import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';

@NgModule({
    declarations: [AttendanceComponent],
    imports: [
        CommonModule,
        AgGridAngular,
        ReactiveFormsModule,
        HttpClientModule,
        FontAwesomeModule,
        AttendanceRoutingModule
    ],
    providers: [],
})
export class AttendanceModule { }
