import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorias } from '../../models/categoria';
import { Marca } from '../../models/marca';
import { Productos } from '../../models/productos';
import { CategoriaServicesService } from '../../services/categoria-services.service';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  public verEdit: boolean = false;
  public myform: FormGroup;
  public dismissible = false;
  public tipoalerta = "";
  public mensaje =  "";
  public Titulo: string = "";
  public listmarca: Marca[]=[];
  public listcategoria: Categorias[]=[];
  @Input('idproducto') prodcutoEdit: Productos;
  @Output('display') display = new EventEmitter();
  constructor(formbuilder: FormBuilder, private marcaservices: MarcaService, private categoriaservices: CategoriaServicesService ) {
    this.myform = formbuilder.group({
      codigo: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      nombreproducto: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      marca: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      Descripcion: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      precio: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      precioventa: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      categoria: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      estado: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      espaginainicial: new FormControl('',Validators.compose([
        Validators.required,
      ])),

    });
    this.Getlistamarcas();
    this.Getlistacategorias();


  }


  ngOnInit(): void {
    if (this.prodcutoEdit!==undefined) {
      this.verEdit= true;
      this.showInfoMarca();
    }else{

      this.verEdit= false;
      this.Titulo = "Prodcuto";
    }
  }

  showInfoMarca(){


  }

  Getlistamarcas(){
    this.marcaservices.GetAll().subscribe(data=>{
      this.listmarca =  data['marcas'];
    });
  }

  Getlistacategorias(){
    this.categoriaservices.GetCategorias().subscribe(
      data=>{
        this.listcategoria =  data['categorias'];
      }
    );
  }



  Save(){

  }

}
