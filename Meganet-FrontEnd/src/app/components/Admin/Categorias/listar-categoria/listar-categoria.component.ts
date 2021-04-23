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

  ShowModalEdit( _id: string){
    this.categoriaServices.GetCategoriaId(_id).subscribe(data =>{
    this.idcategoria = data['categoria'];
    this.display = true;

      });
  }

  closeModalEdit(event){
    console.log(event)
    this.display = event;
    this.GetCategorias();
  }

  DeleteCategoria(_id: string){
    this.categoriaServices.DeleteCategoria(_id).subscribe(data=>{
    this.mensajeError = data['mensaje'];
    setTimeout(function() {
      this.mensajeError = '';
    }.bind(this), 2500);

    this.GetCategorias();
    },error=> {
      this.mensajeError = error;
      setTimeout(function() {
        this.mensajeError = '';
      }.bind(this), 2500);

    }
    );

  }


}
