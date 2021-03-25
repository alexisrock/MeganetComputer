import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'PrincipalProductos', component: ContentComponent},
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
