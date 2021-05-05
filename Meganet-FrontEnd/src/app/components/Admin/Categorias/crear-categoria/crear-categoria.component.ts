import { error } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output, SecurityContext } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Categorias } from '../../models/categoria';

import { CategoriaServicesService } from '../../services/categoria-services.service';
@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  mensajeError: string;
  public myform: FormGroup;
  public dismissible = false;
  public tipoalerta = "";
  public mensaje =  "";
  public Titulo: string = "";
  public verEdit: boolean = false;
  @Input('idcategoria') categoriaEdit: Categorias;
  @Output('display') display = new EventEmitter();

  constructor( formbuilder: FormBuilder, private categoriaServices: CategoriaServicesService) {
    this.myform = formbuilder.group({
      nombreCampo: new FormControl('',Validators.compose([
        Validators.required,
      ])),
    });



  }

  ngOnInit(): void {
    if (this.categoriaEdit!==undefined) {
      this.verEdit= true;
      this.showInfoCategoria();
    }else{

      this.verEdit= false;
      this.Titulo = "Categoria";
    }

  }


  showInfoCategoria(){
    this.myform.get('nombreCampo').setValue(this.categoriaEdit.nombreCategoria);

  }
  Save(){
    if (this.myform.valid) {

      if (this.categoriaEdit!==undefined) {

        this.updateCartegoria();
      } else {
        this.SaveCategoria();
      }


    }else{
      this.dismissible = true;
      this.tipoalerta = "alert";
      this.mensaje = "<strong> ¡Error!</strong> Faltan datos por colocar."
      setInterval(()=>{
        this.dismissible = false;
       }, 4000);

    }
  }

  updateCartegoria(){
this.categoriaServices.categoria.nombreCategoria = this.myform.value.nombreCampo;
    this.categoriaServices.UpdateCategoria(this.categoriaEdit._id).subscribe(
      data=>{
        console.log(data);
        if(data['mensaje']!=undefined){
          this.display.emit(data['mensaje']);
        }else{
          this.dismissible = true;
          this.tipoalerta = "callout alert";
          this.mensaje = "<strong> ¡Error!</strong> "+data['message']+".";
          setInterval(()=>{
            this.dismissible = false;
           }, 4000);
        }
      }
    )

  }

  SaveCategoria(){

      this.categoriaServices.categoria.nombreCategoria = this.myform.value.nombreCampo;
      this.categoriaServices.SaveCategoria().subscribe( data =>{
        console.log(data);

        if (data['data']===undefined) {
          this.dismissible = true;
          this.myform.controls["nombreCampo"].setValue("");
          this.tipoalerta = "callout success";
          this.mensaje = "<strong> Categoria "+data["nombreCategoria"]+" creada con exito. </strong> ."
          setInterval(()=>{
            this.dismissible = false;
           }, 4000);
        }else{
          this.dismissible = true;
          this.tipoalerta = "callout alert";
          this.mensaje = "<strong> ¡Error!</strong> "+data['message']+".";
          setInterval(()=>{
            this.dismissible = false;
           }, 4000);
        }

      },error=>{

        this.dismissible = true;
        this.tipoalerta = "callout alert";
        this.mensaje = "<strong> ¡Error!</strong> "+error.message+"."
        setInterval(()=>{
          this.dismissible = false;
         }, 4000);
      });



  }

  onClosed(){
    this.dismissible = false;
  }




}
