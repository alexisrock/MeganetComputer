import { Component, Inject, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensajeError: string;
  constructor(public authService: AuthService,  public router: Router, @Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
  
  }
  
  login(username: string, password: string){
    this.mensajeError = '';

   this.authService.login(username, password).pipe().subscribe(
    data =>{
      if (data>0) {
        this.router.navigate(['admin']);
      }     
    }, error=>{   
      this.mensajeError = 'Login incorrecto.';
      setTimeout(function() {
        this.mensajeError = '';
      }.bind(this), 2500);
          this.router.navigate(['/']);
    }

   );
 
  }



}
