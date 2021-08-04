import { Routes } from '@angular/router';
import { CrearCategoriaComponent } from './Categorias/crear-categoria/crear-categoria.component';
import { ListarCategoriaComponent } from './Categorias/listar-categoria/listar-categoria.component';
import { CrearMarcaComponent } from './Marcas/crear-marca/crear-marca.component';
import { ListaMarcaComponent } from './Marcas/lista-marca/lista-marca.component';
import { PrincipalComponent } from './principal/principal.component';
import { CrearProductoComponent } from './Producto/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';
import { DashboardComponent } from './dashboard/dashboard.component';






export const AdminRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'CrearProducto', component: CrearProductoComponent},
  { path: 'CrearCategoria', component: CrearCategoriaComponent },
  { path: 'EditarCategoria', component: ListarCategoriaComponent },
  { path: 'CrearMarca', component: CrearMarcaComponent },
  { path: 'EditarMarca', component: ListaMarcaComponent },
  { path: 'CrearProducto', component: CrearProductoComponent },
  { path: 'EditarProducto', component: ListarProductoComponent },
]
