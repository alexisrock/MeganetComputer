import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule, 
  AccordionModule,
   ButtonsModule, 
   CarouselModule ,
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,
    ModalModule,
    OffcanvasModule,
    PaginationModule,
    TypeaheadModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule, } from 'ngx-foundation';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ContentComponent } from './components/content/content.component';

import { ListarProductoComponent } from './components/Admin/listar-producto/listar-producto.component';
import { LoginComponent } from './components/Admin/login/login.component';
import { AppRoutingModule } from './app-routing.module';

import { APP_INITIALIZER, Injectable, InjectionToken  } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PrincipalComponent } from './components/principal/principal.component';
import { AdminModule } from './components/Admin/admin.module';

export interface AppConfig{
  apiEndpoint: string;
};

const APP_CONFIG_VALUE: AppConfig = {
apiEndpoint: "http://localhost:3000/api/"
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');





@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,   
    PrincipalComponent
 
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),        // Foundation Callouts
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),     // Foundation Orbit
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),   // Foundation Dropdown Menus and Dropdown Panes
    ModalModule.forRoot(),        // Foundation Reveal
    OffcanvasModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [  
    AuthService,
    {provide: APP_CONFIG, useValue: APP_CONFIG_VALUE},],
  bootstrap: [AppComponent]
})
export class AppModule { }
