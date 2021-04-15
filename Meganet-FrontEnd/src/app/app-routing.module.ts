import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/Admin/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { PrincipalComponent } from './components/Admin/principal/principal.component';
import { UserloguinGuard } from './guard/userloguin.guard';
import { CrearProductoComponent } from './components/Admin/crear-producto/crear-producto.component';
import { CrearCategoriaComponent } from './components/Admin/crear-categoria/crear-categoria.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: "full" },
  { path: 'PrincipalProductos', component: ContentComponent, pathMatch: "full" },
  { path: 'admin', component: PrincipalComponent,  canActivate: [UserloguinGuard],  pathMatch: "full" },
  { path: 'crearProducto', component: CrearProductoComponent, canActivate: [UserloguinGuard] },
  { path: 'crearCategoria', component: CrearCategoriaComponent,  canActivate: [UserloguinGuard]},

  { path: '**', redirectTo: 'PrincipalProductos', pathMatch: 'full'  }
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
