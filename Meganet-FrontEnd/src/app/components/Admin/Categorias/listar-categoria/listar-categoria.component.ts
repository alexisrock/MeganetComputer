import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../models/categoria';
import { CategoriaServicesService } from '../../services/categoria-services.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

public ListCategorias: Categorias[] =[]

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

  ShowModalEdit(_id: string){

  }

  DeleteCategoria(_id: string){

  }


}
