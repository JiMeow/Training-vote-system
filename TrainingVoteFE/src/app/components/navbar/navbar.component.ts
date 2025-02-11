import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navItems = [
    {name: 'Home', path: '/home'},
    {name: 'Create Vote', path: '/create-vote'}
  ]

  constructor(public router: Router) {
  }
}
