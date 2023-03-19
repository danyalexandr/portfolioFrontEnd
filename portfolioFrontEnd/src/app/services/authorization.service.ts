import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from '../model/persona';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

 private strUrlApi = 'https://portfolio-backend-danyalexandr.koyeb.app';
      
  constructor(private http: HttpClient) { } 
  
  public obtenerDatos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://portfolio-backend-danyalexandr.koyeb.app/user/traer');
  }
  
  //retornar desde apirest
  public obtenerPersona(): Observable <Persona[]> {
    return this.http.get<Persona[]>('https://portfolio-backend-danyalexandr.koyeb.app/persona/lista'); 
  }

  public detail(id:number): Observable<Persona>{
    return this.http.get<Persona>(`https://portfolio-backend-danyalexandr.koyeb.app/persona/detail/${id}`);
  }

  public update(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/persona/update/${id}`, persona);
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.strUrlApi, { email: email, password: password })
      .pipe(
        map(response => {
          // Guardar token de autenticación en localStorage
          localStorage.setItem('token', response.token);
        })
      );
  }

  logout() {
    // Eliminar token de autenticación de localStorage
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // Verificar si existe un token de autenticación en localStorage
    const token = localStorage.getItem('token');
    return token !== null;
   
}

}