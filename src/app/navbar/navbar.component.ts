import { Component, OnInit, HostListener } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarCollapsed = true;
  mobile:Boolean;
  constructor( private router: Router, public authService: AuthService) { }

  ngOnInit() {
    if (window.innerWidth < 1000) { // 768px portrait
      this.mobile = true;
    }
  }



  //if screen size changes it'll update
  @HostListener('window:resize', ['$event'])
  resize(event) {
    
     this.mobile = window.innerWidth< 1000;
    
  }

  onLoguotClick(){
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }


}
