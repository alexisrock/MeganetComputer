import { Component, OnInit } from '@angular/core';

import { Categorias } from '../../models/categoria';
import { CategoriaServicesService } from '../../services/categoria-services.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

public ListCategorias: Categorias[] =[];
public mensajeError: string = "";
public display: boolean = false;
public idcategoria : Categorias ;
public tipoalerta: string = "";
first = 0;
rows = 10;
  constructor(public categoriaServices: CategoriaServicesService) {
    this.GetCategorias();
   }

  ngOnInit(): void {

  }

  GetCategorias(){
    this.categoriaServices.GetCategorias().subscribe(
      data=>{
          this.ListCategorias = data['categorias'];
      }
    )
  }

  ShowModalEdit( Categoria){

    this.idcategoria = Categoria
    this.display = true;


  }

  closeModalEdit(event){
    console.log(event)
    this.display = false;
    this.mensajeError = event;
    this.tipoalerta = "callout success";
    setTimeout(function() {
      this.mensajeError = '';
    }.bind(this), 2500);
    this.GetCategorias();
  }

  DeleteCategoria(_id: string){
    this.categoriaServices.DeleteCategoria(_id).subscribe(data=>{
    this.mensajeError = data['mensaje'];
    this.tipoalerta = "callout success";
    setTimeout(function() {
      this.mensajeError = '';
    }.bind(this), 2500);

    this.GetCategorias();
    },error=> {
      this.tipoalerta = "callout alert";
      this.mensajeError = error;
      setTimeout(function() {
        this.mensajeError = '';
      }.bind(this), 2500);

    }
    );

  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.ListCategorias ? this.first === (this.ListCategorias.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.ListCategorias ? this.first === 0 : true;
}



}
