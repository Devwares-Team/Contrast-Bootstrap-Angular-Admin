import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Navbar implements OnInit {
  @Input() bg;
  @Input() color;
  btnStyle
  constructor() { }

  ngOnInit(): void {
    this.btnStyle = `color: ${this.color}`
  }

}
