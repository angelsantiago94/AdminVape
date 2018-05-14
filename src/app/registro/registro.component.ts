import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: String;
  password: String;
  
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit() {
  }

  registro(){
    this.authService.registro(this.email, this.password)
       .then((res) => {
          console.log(res);
    
          this.router.navigate(['login']);
       })
       .catch((err) => console.log('error: ' + err));
  }

}
