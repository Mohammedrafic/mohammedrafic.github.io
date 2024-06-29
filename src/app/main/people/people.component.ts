import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from './services/service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ActiveNavEnum } from 'src/app/enum/activenavitem';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @ViewChild(EmployeeListComponent) EmployeeListComponent!: EmployeeListComponent;
  activeNavItem: string = ActiveNavEnum.All;
  IsClicked : boolean = false;
  EmployeeData : any;
  activateNavItem(item: string): void {
    this.activeNavItem = item;
    this.EmployeeListComponent.GetActiveNavItem(this.activeNavItem);
  }
  constructor(private PeopleService: PeopleService) { }

  ngOnInit(): void {
  }

  GetEmployeeDetails(val : any){
  this.IsClicked = val.isClicked;   
  this.PeopleService.GetEmployeeById(val.Id).subscribe((res: any) => {
    this.EmployeeData = res;
  })
  }

  searchFilter(val : any){
    this.EmployeeListComponent.filter(val);
  }
}
