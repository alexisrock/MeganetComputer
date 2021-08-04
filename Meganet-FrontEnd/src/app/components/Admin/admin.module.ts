import { NgModule } from '@angular/core';

import { CrearCategoriaComponent } from './Categorias/crear-categoria/crear-categoria.component';
import { CrearProductoComponent } from './Producto/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { ListaMarcaComponent } from './Marcas/lista-marca/lista-marca.component';
import { CrearMarcaComponent } from './Marcas/crear-marca/crear-marca.component';
import { ListarCategoriaComponent } from './Categorias/listar-categoria/listar-categoria.component';
import { CookieService } from 'ngx-cookie-service';
import { AlertModule, ModalModule  } from 'ngx-foundation';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import { AdminRoutesModule } from './admin-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    CrearCategoriaComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    PrincipalComponent,

    ListaMarcaComponent,
    CrearMarcaComponent,
    ListarCategoriaComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    ModalModule .forRoot(),
    TableModule,
    ButtonModule,
    DialogModule,

    DropdownModule,
    CheckboxModule,
    AdminRoutesModule

  ],
  providers: [CookieService,       SharedModule],
})
export class AdminModule { }
