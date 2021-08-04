import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public mensajeError: string = '';
  public myform: FormGroup;
  constructor(
    public authService: AuthService,
    public router: Router,
    formbuilder: FormBuilder,
    private renderer: Renderer2
  ) {
    this.myform = formbuilder.group({
      idusuario: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
    });
    this.renderer.setStyle(document.body, 'background-color', '#2F5597');
  }

  ngOnInit(): void {}

  login() {
    this.mensajeError = '';

    this.authService
      .login(this.myform.value.idusuario, this.myform.value.password)
      .subscribe(
        (data) => {
          if (data != null) {
            this.authService.setToken(data['token']);
            this.authService.setUser(data['usuario'].usuario);
            this.authService.setNombreUsuario(data['usuario'].nombre.toString());

            this.router.navigate(['/admin']);
          }
        },
        (error) => {
          this.mensajeError = 'Login incorrecto.';
          setTimeout(
            function () {
              this.mensajeError = '';
            }.bind(this),
            2500
          );
          this.router.navigateByUrl('login');
        }
      );
  }
}
