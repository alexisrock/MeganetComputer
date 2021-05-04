import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/app.module';
import { AuthService } from 'src/app/services/auth.service';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(public httpclient : HttpClient,  @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig, public auth: AuthService) { }


  public token = this.auth.getToken();

  public  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'TokenKey' :  this.token,

  });

  public marca: Marca = {
    _id :"",
    Descripcion:""
  }

  GetAll(){
    return this.httpclient.get<Marca[]>(this.config.apiEndpoint+'Marca/', {headers: this.headers} );
  }





}
