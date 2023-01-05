import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, UrlSerializer } from '@angular/router';
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler';
import { Persona } from '../model/persona';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

user:boolean = false;

  private strUrlApi:string;
      
  constructor(private http: HttpClient, private router: Router) { 

    this.strUrlApi = 'https://portfolio-backend-danyalexandr.koyeb.app';
  }

  /*public loginSimple(email:string, pwd:string): void{
    this.http.get(this.strUrlApi).subscribe((response:any) => {{
      localStorage.setItem('token', response.token);
     if(email === this.email && pwd === this.pwd ){
      this.router.navigate(['/home'])
    }else{
      console.log("usuario y contraseña incorrecta");
    }
      console.log(email, pwd);
    }});
  }*/

  
  
  public obtenerDatos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://portfolio-backend-danyalexandr.koyeb.app/user/traer');
  }

  public logout():void{
        this.router.navigate(['/']);
  }

  public isUserLogin():boolean{
    return this.user = true;  
  }
  
  //retornar desde apirest
  public obtenerPersona(): Observable <Persona[]> {
    return this.http.get<Persona[]>('https://portfolio-backend-danyalexandr.koyeb.app/persona/lista'); 

  }

   
}
 