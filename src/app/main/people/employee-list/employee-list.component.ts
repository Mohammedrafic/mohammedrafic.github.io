import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeopleService } from '../services/service';
import { ActiveNavEnum } from 'src/app/enum/activenavitem';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  EmpList: any[] = [];
  TempEmpList: any[] = [];
  imageUrl: string | ArrayBuffer | null = null;
  @Output() IsClick = new EventEmitter<any>();
  @Input() activeNavItem: any;
  constructor(private PeopleService: PeopleService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.PeopleService.GetEmployeeList().subscribe((res: any) => {
      if (res) {
        this.TempEmpList = res;
        this.EmpList = this.activeNavItem === ActiveNavEnum.Starred ? res.filter((x: any) => x.isStarred == true) : res;
      }
    });
  }
  GetEmployeeDetails(val: any) {
    let data = {
      Id: val, isClicked: true
    }
    this.IsClick.emit(data);
  }

  toggleStar(Id: any) {
    let val = this.EmpList.find(x => x.id == Id);
    val.isStarred = !val.isStarred;
    this.PeopleService.UpdateStarred(Id).subscribe((res: any) => {
      if (res) {
        this.GetEmployeeDetails(Id);
      }
    });
  }

  GetActiveNavItem(val: any) {
    this.activeNavItem = val;
    this.getEmployeeList();
  }

  filter(val: any) {
    let filterValue = val.target.value.toLowerCase().trim();
    this.EmpList = this.TempEmpList.filter((x: any) => {
      if (this.activeNavItem === ActiveNavEnum.All) {
        return !filterValue || x.empName.toLowerCase().includes(filterValue) || x.id == filterValue;
      } else if (this.activeNavItem === ActiveNavEnum.Starred) {
        return (!filterValue || x.empName.toLowerCase().includes(filterValue)) && x.isStarred;
      }
      return true;
    });
  }
}
