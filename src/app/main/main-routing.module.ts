import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LocationComponent } from './location/location.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'location', component: LocationComponent }, 
  { path: 'feedBack', component: FeedBackComponent }, 
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) }, 
  { path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
