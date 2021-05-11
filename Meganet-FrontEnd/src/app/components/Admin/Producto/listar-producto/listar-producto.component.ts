import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  public listProductos: Productos[]= [];
  public tipoalerta: string = "";
  public mensajeError: string = "";
  public display: boolean = false;
  public producto: Productos;
  constructor(private productoServices: ProductoService) {
    this.GetProductos();
   }
  first = 0;
  rows = 10;
  ngOnInit(): void {

  }

  GetProductos(){
    this.productoServices.GetAll().subscribe(
      data=>{
        console.log( data);
        this.listProductos = data['product'];
      }
    );
  }





  ShowModalEdit(marcas){


  }

  Delete(_id: string){

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
    return this.listProductos ? this.first === (this.listProductos.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.listProductos ? this.first === 0 : true;
}

}
