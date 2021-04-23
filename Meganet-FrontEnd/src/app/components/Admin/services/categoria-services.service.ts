import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forwardRef, Inject, Injectable } from '@angular/core';

import { AppConfig, APP_CONFIG } from 'src/app/app.module';
import { AuthService } from 'src/app/services/auth.service';
import { Categorias } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServicesService {

  constructor(public httpclient : HttpClient,  @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig, public auth: AuthService) { }


  public categoria: Categorias = {
    _id :"",
    nombreCategoria : ""
  }

  public token = this.auth.getToken();

  public  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'TokenKey' :  this.token,

  });


  SaveCategoria(){
    return this.httpclient.post(this.config.apiEndpoint+'categoria/create', this.categoria,{headers: this.headers} );
  }

  GetCategorias(){
    return this.httpclient.get<Categorias[]>(this.config.apiEndpoint+'categoria/', {headers: this.headers} );

  }

  DeleteCategoria(idCategoria){
    return this.httpclient.delete(this.config.apiEndpoint+'categoria/'+idCategoria+'/delete', {headers: this.headers} );
  }

  GetCategoriaId(idcategoria){
    console.log("categoria: "+idcategoria)
    return this.httpclient.get<Categorias>(this.config.apiEndpoint+'categoria/'+idcategoria+'', {headers: this.headers} );
  }

  UpdateCategoria(idcategoria){
    return this.httpclient.put(this.config.apiEndpoint+'categoria/'+idcategoria+'/update', {Categoriareq: this.categoria.nombreCategoria} ,{headers: this.headers} );
  }

}
