import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fecha: string = "";
  meses: any[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  constructor() {

    var fe = new Date();

    this.fecha = this.meses[fe.getMonth()]+" "+fe.getDay()+" de "+fe.getFullYear();
   }

  ngOnInit(): void {
  }

}
