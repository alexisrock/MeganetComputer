import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Marca } from '../../models/marca';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css']
})
export class CrearMarcaComponent implements OnInit {
  public verEdit: boolean = false;
  mensajeError: string;
  public myform: FormGroup;
  public dismissible = false;
  public tipoalerta = "";
  public mensaje =  "";
  public Titulo: string = "";
  @Input('idmarca') marcaEdit: Marca;
  @Output('display') display = new EventEmitter();
  constructor(formbuilder: FormBuilder, private marcaservices: MarcaService) {
    this.myform = formbuilder.group({
      descripcion: new FormControl('',Validators.compose([
        Validators.required,
      ])),
    });

   }

  ngOnInit(): void {
    if (this.marcaEdit!==undefined) {
      this.verEdit= true;
      this.showInfoMarca();
    }else{

      this.verEdit= false;
      this.Titulo = "Categoria";
    }
  }

  showInfoMarca(){

    this.myform.get('descripcion').setValue(this.marcaEdit.Descripcion);

  }



  Save(){
    if (this.myform.valid) {

      if (this.marcaEdit!==undefined) {
        this.update();
      }else{
        this.Add();
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


  Add(){
    this.marcaservices.marca.marcaproducto = this.myform.value.descripcion;
    this.marcaservices.add().subscribe(
      data=>{
        console.log(data);
        if (data['Descripcion']) {
          this.dismissible = true;
          this.myform.controls["descripcion"].setValue("");
          this.tipoalerta = "callout success";
          this.mensaje = "<strong> Categoria "+data["Descripcion"]+" creada con exito. </strong> ."
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
        this.tipoalerta = "alert";
        this.mensaje = "<strong> ¡Error!</strong> "+error.message+"."
        setInterval(()=>{
          this.dismissible = false;
         }, 4000);

      }
    );

  }


  update(){
    this.marcaservices.marcaEdit.Descripcion = this.myform.value.descripcion
    this.marcaservices.marcaEdit._id = this.marcaEdit._id;
    this.marcaservices.Update(this.marcaEdit._id).subscribe(
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

      }, error=>{
          this.dismissible = true;
          this.tipoalerta = "callout alert";
          this.mensaje = "<strong> ¡Error!</strong> "+error.message+"."
          setInterval(()=>{
            this.dismissible = false;
           }, 4000);
      }
    );

  }

}
