import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'SidebarFree',
  templateUrl: './sidebar-free.component.html',
  styleUrls: ['./sidebar-free.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarFreeComponent implements OnInit {

  @Input() bgColor: String;
  @Input() color: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
