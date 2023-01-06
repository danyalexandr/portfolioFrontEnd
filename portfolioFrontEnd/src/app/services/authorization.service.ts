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

private local:string = '../../assets/data/user.json';

  private strUrlApi:string;
      
  constructor(private http: HttpClient, private router: Router) { 

    this.strUrlApi = 'https://portfolio-backend-danyalexandr.koyeb.app';
  } 
  
  public obtenerDatos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://portfolio-backend-danyalexandr.koyeb.app/user/traer');
  }
  
  //retornar desde apirest
  public obtenerPersona(): Observable <Persona[]> {
    return this.http.get<Persona[]>('https://portfolio-backend-danyalexandr.koyeb.app/persona/lista'); 

  }

  public loginSimple(email:string, password:string):void{
    this.http.get(this.local).subscribe(
      (response:any) => {
        if(response.token != null){
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        }
      }
    );
  }

  public logout():void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  public isUserLogin():boolean{
    return (localStorage.getItem('token') != null);
  }
   
}
 