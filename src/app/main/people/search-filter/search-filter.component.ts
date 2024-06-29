import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  filterVisible = false;
  @Output() searchItem = new EventEmitter<any>();
  toggleFilter() {
    this.filterVisible = !this.filterVisible;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  searchfilter(val : any){
    this.searchItem.emit(val);
  }
}
