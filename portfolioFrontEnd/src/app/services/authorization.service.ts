import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  
  private usuario: Usuario[];
  isAuthenticated: boolean = false;     
      
  constructor(private http: HttpClient) { } 
  
  obtenerDatos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://portfolio-backend-danyalexandr.koyeb.app/api/user/traer');
  }

  setDatos(usuario:Usuario[]){
    this.usuario = usuario;
  }

  getDatosFromMemory(): Usuario[] {
    return this.usuario;
  }
  
  //retornar desde apirest
  public obtenerPersona(): Observable <Persona[]> {
    return this.http.get<Persona[]>('https://portfolio-backend-danyalexandr.koyeb.app/api/persona/lista'); 
  }

  public detail(id:number): Observable<Persona>{
    return this.http.get<Persona>(`https://portfolio-backend-danyalexandr.koyeb.app/api/persona/detail/${id}`);
  }

  public update(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/persona/update/${id}`, persona);
  }

  logout(){
    this.isAuthenticated = false;
   }
}