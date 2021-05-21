import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorias } from '../../models/categoria';
import { Marca } from '../../models/marca';
import { Productos } from '../../models/productos';
import { CategoriaServicesService } from '../../services/categoria-services.service';
import { MarcaService } from '../../services/marca.service';
import { ProductoService } from '../../services/producto.service';

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
  private formData = new FormData();
  uploadedFiles: File[] ;
  @Input('idproducto') prodcutoEdit: Productos;
  @Output('display') display = new EventEmitter();
  public validation ={
    codigo: [
      {type: 'required', message: 'El campo es obligatorio'}
    ],
    nombreproducto: [
      {type: 'required', message: 'El campo es obligatorio'}
    ],

    marca: [
      {type: 'required', message: 'El campo es obligatorio'}
    ],
    Descripcion: [
      {type: 'required', message: 'El campo es obligatorio'}
    ],
    precio: [
      {type: 'required', message: 'El campo es obligatorio'}
    ],
    precioventa: [
      {type: 'required', message: 'El campo es obligatorio'}
    ],
    categoria: [
      {type: 'required', message: 'El campo es obligatorio'}
    ]

  }

  constructor(formbuilder: FormBuilder, private marcaservices: MarcaService, private categoriaservices: CategoriaServicesService, public productoServices: ProductoService ) {
    this.myform = formbuilder.group({
      file: new FormControl('',Validators.compose([

      ])),
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

      ])),
      espaginainicial: new FormControl('',Validators.compose([

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
      this.Titulo = "Producto";
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



  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

 GuardarImagen(){

    // for (var i = 0; i < this.uploadedFiles.length; i++) {
    //   this.formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    // }
  }


 async Save(){

    if (this.myform.valid) {
      this.productoServices.producto.idCategoria = this.myform.value.categoria;
      this.productoServices.producto.descriproducto = this.myform.value.Descripcion;
      this.productoServices.producto.paginainiproducto = this.myform.value.espaginainicial;
      this.productoServices.producto.idmarca = this.myform.value.marca;
      this.productoServices.producto.nombreproducto = this.myform.value.nombreproducto;
      this.productoServices.producto.precioproducto = this.myform.value.precio;
      this.productoServices.producto.preciovenproducto = this.myform.value.precioventa;
      this.productoServices.producto.codproducto = this.myform.value.codigo;
      this.productoServices.producto.archivo = this.uploadedFiles[0];
      console.log( this.productoServices.producto.archivo);
      this.productoServices.add().subscribe(
        data=>{
          console.log(data);
        }
      );

    }

  }

}
