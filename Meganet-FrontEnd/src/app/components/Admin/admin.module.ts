import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CrearCategoriaComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AdminModule { }
