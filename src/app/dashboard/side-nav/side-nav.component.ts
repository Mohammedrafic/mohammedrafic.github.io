import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('slideToggle', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden',
        opacity: 0
      })),
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      transition('collapsed => expanded', [
        animate('300ms ease-out')
      ]),
      transition('expanded => collapsed', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {
  isExpanded = false;
  expandedIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-items')) {
      this.expandedIndex = null;
    }
  }

}
