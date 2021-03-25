  
import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import { AppConfig, APP_CONFIG} from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,   @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig,) { }

  login(user: string, password: string): boolean {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    console.log("endpoint: "+this.config.apiEndpoint + '/auth/authenticateVendedor');
    const req = new HttpRequest('POST', this.config.apiEndpoint + '/auth/authenticateVendedor', { idusuario:user,  password:password }, { headers: headers });
    this.http.request(req).subscribe((data: HttpResponse<{}>)=>{
        if (data.status===200) {
            console.log("devuelto: "+data.body);
            localStorage.setItem('username', user);
            localStorage.setItem('token', user);
            return true;
        }
        return false;   
    });




    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}