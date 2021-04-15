import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  constructor(public auth: AuthService) {


   }

  ngOnInit(): void {

    this.GetUserLoggued();
    this.GetToken();

  }
  GetUserLoggued(){
    return this.auth.getUser();
  }

  GetToken(){
    return this.auth.getToken();
  }


}
