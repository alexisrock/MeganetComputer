  
import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import { AppConfig, APP_CONFIG} from '../app.module';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,   @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig,) { }

   login(user: string, password: string) {

    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const req = new HttpRequest('POST', this.config.apiEndpoint + 'auth/authenticateVendedor', { idusuario:user,  password:password }, { headers: headers });
    return this.http.request(req).pipe(map((datos: HttpResponse<{}>)=>{
        if (datos.status===200) {
           localStorage.setItem('username', datos.body['data'].usuario.usuario);
          localStorage.setItem('token', datos.body['data'].token);       
          return datos.body['data'].usuario.usuario;
        }
       
    }));

  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }


  getToken(): any{
    return localStorage.getItem('token');
  }



  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  isTokenActive(): boolean{
    return this.getToken() !== null;
  }

}