import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  navToggleL = new EventEmitter();
  @Output()
  navToggleR = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleNavL() {
    this.navToggleL.emit();
  }
  toggleNavR() {
    this.navToggleR.emit();
  }
}
