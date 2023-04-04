import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Persona } from '../model/persona';
import { Usuario } from '../model/usuario';

//interfaz aquí, dentro del archivo authService.ts
export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  
  private usuario: Usuario[];   
      
  constructor(private http: HttpClient) { } 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };
  
  obtenerDatos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://portfolio-backend-danyalexandr.koyeb.app/api/user/traer', this.httpOptions);
  }

  //'https://portfolio-backend-danyalexandr.koyeb.app/api/user/login'

   
  //retornar desde apirest
  public obtenerPersona(): Observable <Persona[]> {
    return this.http.get<Persona[]>('https://portfolio-backend-danyalexandr.koyeb.app/api/persona/lista', this.httpOptions); 
  }

  public detail(id:number): Observable<Persona>{
    return this.http.get<Persona>(`https://portfolio-backend-danyalexandr.koyeb.app/api/persona/detail/${id}`, this.httpOptions);
  }

  public update(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/persona/update/${id}`, persona, this.httpOptions);
  }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post('https://portfolio-backend-danyalexandr.koyeb.app/api/user/login', credentials, {responseType: 'text'}).pipe(
      tap(response => {
        if (typeof response === 'string') {
          // Almacena el token en el LocalStorage
          localStorage.setItem('authToken', response);
        }
      })
    );
  }

  logout() {
    // Elimina el token del LocalStorage
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    // Comprueba si hay un token en el LocalStorage
    return localStorage.getItem('authToken') !== null;
  }
}