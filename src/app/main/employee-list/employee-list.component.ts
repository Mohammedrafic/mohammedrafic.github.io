import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private EmpService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  public rowData: any[] = [];
  public columnDefs: any[] = [
    {
      field: "id",
      checkboxSelection: true,
      // onCellClicked: (event : any) => {
      //   if (event.column.getColDef().field === 'id') {
      //     console.log(event);
      //     console.log('Checkbox clicked');
      //   }
      // },
    },
    {
      field: "empName",
      editable: true,
      onCellValueChanged: (event: any) => {
        console.log(event);
      }
    },
    { field: "dob" },
    { field: "age" },
    {
      field: "salary"
    },
    {
      field: "phoneNo"
    },
  ];
  public defaultColDef: any = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
  };
  public rowSelection: "single" | "multiple" = "single";
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];
  public themeClass: string =
    "ag-theme-quartz";

  getEmployee() {
    this.EmpService.GetEmployeeList().subscribe((res: any) => {
      if (res) {
        this.rowData = res;
      }
    });
  }
}
