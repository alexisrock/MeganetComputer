
import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import { AppConfig, APP_CONFIG} from '../app.module';
import { map } from 'rxjs/operators';
import { CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,   @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig , private cookies: CookieService) { }

   login(user: string, password: string) {

    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const req = new HttpRequest('POST', this.config.apiEndpoint + 'auth/authenticateVendedor', { idusuario:user,  password:password }, { headers: headers });
    return this.http.request(req).pipe(map((datos: HttpResponse<{}>)=>{
        if (datos.status===200) {
          return datos.body['data'];
        }

    }));

  }

  logout(){
    this.cookies.delete('token');
    this.cookies.delete('username');
  }

  getUser(): any {
    return this.cookies.get('username');
  }

  setUser(Usuario: string){
    this.cookies.set('username', Usuario);
  }

  getToken(): any{
    return this.cookies.get('token');
  }

  setToken(token: string){
    this.cookies.set('token', token);
  }


  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  isTokenActive(): boolean{
    return this.getToken() !== null;
  }

}
