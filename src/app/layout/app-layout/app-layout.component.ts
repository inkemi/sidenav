import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/layout', title: 'Layout', icon: 'folder'},
    {route: '/layout', title: 'User', icon: 'face'}
  ];
  navBarOpenL = true
  navBarOpenR = true

  toggleNavL() {
    this.navBarOpenL = !this.navBarOpenL;
  }

}
