import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorias } from '../../models/categoria';
import { CategoriaServicesService } from '../../services/categoria-services.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  @Input('idcategoria')  idcategoria: Categorias;
  @Output()  display =  new  EventEmitter<boolean>();
  public myform: FormGroup;
  public dismissible = false;
  public tipoalerta = "";
  public mensaje =  "";

  constructor(formbuilder: FormBuilder, public categoriaServices: CategoriaServicesService) {
    this.myform = formbuilder.group({
      nombreCampo: new FormControl('',Validators.compose([
        Validators.required,
      ])),
    });


   }


  ngOnInit(){

  }


  SaveCategoria(){
    this.categoriaServices.categoria._id = this.idcategoria._id;
    this.categoriaServices.categoria.nombreCategoria = this.myform.value.nombreCampo;
    this.categoriaServices.UpdateCategoria(this.idcategoria._id).subscribe(data=>{
      if (data!=null) {
        this.display.emit(false);
      }
    },error=>{
      this.dismissible = true;
      this.tipoalerta = "alert";
      this.mensaje = "<strong> ¡Error!</strong> "+error.message+"."
      setInterval(()=>{
        this.dismissible = false;
       }, 4000);
    });



  }




}
