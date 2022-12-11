import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler';
import { Persona } from '../model/persona.model';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  email:string = 'test@email.com';
  pwd:string = "123456789";

  private strUrlApi:string;
  private baseURL = "http://localhost:8080/persona/traer";
  expURL = 'http://localhost:8080/explab';
  
  constructor(private http: HttpClient, private router: Router) { 
    this.strUrlApi = '../assets/data/user.json';
  }
  public loginSimple(email:string, pwd:string): void{
    this.http.get(this.strUrlApi).subscribe((response:any) => {if(response.token !=null){
      localStorage.setItem('token', response.token);
      if(email === this.email && pwd === this.pwd ){
      this.router.navigate(['/home'])
    }else{
      console.log("usuario y contraseña incorrecta");
    }
      console.log(email, pwd);
    }});
  }

  public logout():void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  public isUserLogin(){
    return (localStorage.getItem('token') !=null);
    
  }
  public obtenerDatos(): Observable<any>{
    return this.http.get('../assets/data/user.json');
  }

  public obtenerPersona(): Observable <Persona> {
    return this.http.get<Persona>('http://localhost:8080/persona/traer/perfil'); 

  }

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>('http://localhost:8080/explab/lista');
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>('http://localhost:8080/explab/create', experiencia);
  }

  
}
 