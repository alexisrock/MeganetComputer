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
import { ListarProductoComponent } from './components/Admin/Producto/listar-producto/listar-producto.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_INITIALIZER, Injectable, InjectionToken  } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AdminModule } from './components/Admin/Admin.module';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { AuthModule } from './components/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


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
    ContentComponent

  ],exports: [
    HeaderMenuComponent,
    TableModule,
  DialogModule

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
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
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [
    AuthService,
    SharedModule,
    {provide: APP_CONFIG, useValue: APP_CONFIG_VALUE},],
  bootstrap: [AppComponent]
})
export class AppModule { }
