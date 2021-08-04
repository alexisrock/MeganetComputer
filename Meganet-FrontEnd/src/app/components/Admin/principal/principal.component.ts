import { Component, OnInit, Renderer2 } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  constructor(public auth: AuthService,private renderer: Renderer2,) {

    this.renderer.setStyle(
      document.body,
      "background-color",
      '#fff'
    );
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
