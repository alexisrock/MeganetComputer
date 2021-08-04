import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from '../auth/login/login.component';


const rutasHijas:Routes = [
  {
    path: 'admin',
    component: PrincipalComponent,
    children: AdminRoutes
},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutasHijas),

  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutesModule { }
