import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  nombreUsuario: string = "";

  constructor(public auth: AuthService, public router: Router,) { }

  ngOnInit(): void {
    this.GetUserLoggued();
    this.nombreUsuario = this.auth.getNombreUsuario();
  }

  GetUserLoggued(){
    return this.auth.getUser();
  }

  closedSession(){
    this.auth.logout();
    this.router.navigateByUrl('');
  }

}
