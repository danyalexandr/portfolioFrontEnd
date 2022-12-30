import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
log:boolean;

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

  public loginTest(username:string, password:string):void{
    this.http.get(this.strUrlApi).subscribe((response:any) =>{
      localStorage.setItem('username', response);
      localStorage.setItem('password', response);
    })
  }
  
  public obtenerDatos(): Observable<any>{
    return this.http.get<Persona>('https://portfolio-backend-danyalexandr.koyeb.app');
  }

  public logout():void{
    this.log = false;
    this.router.navigate(['/']);
  }

  public isUserLogin(){
  return this.log = true;
  }
  
  //retornar desde apirest
  public obtenerPersona(): Observable <Persona> {
    return this.http.get<Persona>('https://portfolio-backend-danyalexandr.koyeb.app'); 

  }

   
}
 