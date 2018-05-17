import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-angular',
  templateUrl: './navbar-angular.component.html',
  styleUrls: ['./navbar-angular.component.css']
})
export class NavbarAngularComponent implements OnInit {

  opened: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
