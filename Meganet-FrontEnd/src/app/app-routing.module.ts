import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/Admin/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { PrincipalComponent } from './components/Admin/principal/principal.component';
import { UserloguinGuard } from './guard/userloguin.guard';
import { CrearProductoComponent } from './components/Admin/Producto/crear-producto/crear-producto.component';
import { CrearCategoriaComponent } from './components/Admin/Categorias/crear-categoria/crear-categoria.component';
import { ListarCategoriaComponent } from './components/Admin/Categorias/listar-categoria/listar-categoria.component';
import { CrearMarcaComponent } from './components/Admin/Marcas/crear-marca/crear-marca.component';
import { ListaMarcaComponent } from './components/Admin/Marcas/lista-marca/lista-marca.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: "full" },
  { path: 'PrincipalProductos', component: ContentComponent, pathMatch: "full" },
  { path: 'admin', component: PrincipalComponent,  canActivate: [UserloguinGuard],  pathMatch: "full" },
  { path: 'CrearProducto', component: CrearProductoComponent, canActivate: [UserloguinGuard] },
  { path: 'CrearCategoria', component: CrearCategoriaComponent,  canActivate: [UserloguinGuard]},
  { path: 'EditarCategoria', component: ListarCategoriaComponent,  canActivate: [UserloguinGuard]},
  { path: 'CrearMarca', component: CrearMarcaComponent, canActivate: [UserloguinGuard]  },
  { path: 'EditarMarca', component: ListaMarcaComponent, canActivate: [UserloguinGuard]  },

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
