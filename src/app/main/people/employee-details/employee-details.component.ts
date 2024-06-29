import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() data : any;
  imageUrl: string | ArrayBuffer | null = null;
  constructor() { }

  ngOnInit(): void {
  }
  

}
