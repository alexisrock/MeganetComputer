import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { UserloguinGuard } from './guard/userloguin.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'PrincipalProductos', component: ContentComponent, pathMatch: 'full' },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: '',
    canLoad: [UserloguinGuard],
    loadChildren: () =>
      import('./components/Admin/Admin.module').then((m) => m.AdminModule),
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
