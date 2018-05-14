import { Component, OnInit, HostBinding } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

  email: String;
  password: String;
  ngOnInit() { }

  loginSubmit() {
    this.authService.signInRegular(this.email, this.password)
       .then((res) => {
          console.log(res);
    
          this.router.navigate(['home']);
       })
       .catch((err) => console.log('error: ' + err));
 }

}
