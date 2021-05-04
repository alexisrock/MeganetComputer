import { Component, OnInit } from '@angular/core';
import { Marca } from '../../models/marca';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-lista-marca',
  templateUrl: './lista-marca.component.html',
  styleUrls: ['./lista-marca.component.css']
})
export class ListaMarcaComponent implements OnInit {
  public ListaMarcas: Marca[] = [];
  public tipoalerta: string = "";
  public mensajeError: string = "";
  public display: boolean = false;
  first = 0;
  rows = 10;
  constructor(public marcaservices: MarcaService) {
    this.GetAll();
  }

  ngOnInit(): void {
  }

  GetAll(){
    this.marcaservices.GetAll().subscribe(
      data=>{
        this.ListaMarcas =  data['marcas'];
    })
  }

  ShowModalEdit(marcas){

  }

  Delete(_id: string){

  }

  closeModalEdit(event){

  }
}
