import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/app.module';
import { Producto } from 'src/app/models/Producto';
import { AuthService } from 'src/app/services/auth.service';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public httpclient : HttpClient,  @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig, public auth: AuthService) {
  }


    public token = this.auth.getToken();

    public  headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'TokenKey' :  this.token,

    });

public producto: Productos = {
  idCategoria : null,
  codproducto: "",
  descriproducto: "",
  paginainiproducto: null,
  idmarca: null,
  nombreproducto: "",
  precioproducto: 0,
  preciovenproducto: 0,
  archivo: null,
  urldeimagen: null
}


  GetAll(){
    return this.httpclient.get<Productos[]>(this.config.apiEndpoint+'Producto/', {headers: this.headers} );

  }

  add(){
    return this.httpclient.post(this.config.apiEndpoint+'Producto/create', this.producto,{headers: this.headers} );
  }
}
