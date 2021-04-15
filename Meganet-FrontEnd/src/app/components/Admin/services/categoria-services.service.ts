import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/app.module';
import { AuthService } from 'src/app/services/auth.service';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServicesService {

  constructor(public httpclient : HttpClient,  @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig, public auth: AuthService) { }


  public categoria: Categoria = {
    nombreCategoria : ""
  }

  public  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'TokenKey' :  'dasdasd',

  });


  SaveCategoria(){
    return this.httpclient.post(this.config.apiEndpoint+'categoria/create', this.categoria,{headers: this.headers} );
  }


}
