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
  public marca: Marca;
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
    this.marca = marcas;
    this.display = true;

  }

  Delete(_id: string){
    this.marcaservices.Delete(_id).subscribe(
      data=>
      {
        this.mensajeError = data['mensaje'];
        this.tipoalerta = "callout success";
        setTimeout(function() {
          this.mensajeError = '';
        }.bind(this), 2500);
        this.GetAll();
    }, error=>{
      this.tipoalerta = "callout alert";
      this.mensajeError = error;
      setTimeout(function() {
        this.mensajeError = '';
      }.bind(this), 2500);
    })

  }

  closeModalEdit(event){
    this.display = false;
    this.mensajeError = event;
    this.tipoalerta = "callout success";
    setTimeout(function() {
      this.mensajeError = '';
    }.bind(this), 2500);
    this.GetAll();
  }
}
