import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { ListaMarcaComponent } from './lista-marca/lista-marca.component';
import { CrearMarcaComponent } from './crear-marca/crear-marca.component';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { CookieService } from 'ngx-cookie-service';
import { AlertModule } from 'ngx-foundation';


@NgModule({
  declarations: [
    CrearCategoriaComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    PrincipalComponent,
    LoginComponent,
    ListaMarcaComponent,
    CrearMarcaComponent,
    ListarCategoriaComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
  ],
  providers: [CookieService],
})
export class AdminModule { }