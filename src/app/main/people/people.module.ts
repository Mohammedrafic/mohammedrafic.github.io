import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
    declarations: [PeopleComponent, SearchFilterComponent, EmployeeListComponent, EmployeeDetailsComponent],
    imports: [
        CommonModule,
        AgGridAngular,
        ReactiveFormsModule,
        HttpClientModule,
        FontAwesomeModule,
        PeopleRoutingModule
    ],
    providers: [],
})
export class PeopleModule { }
