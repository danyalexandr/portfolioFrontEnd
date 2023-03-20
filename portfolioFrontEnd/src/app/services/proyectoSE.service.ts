import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoSE {

  constructor(private http: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>('https://portfolio-backend-danyalexandr.koyeb.app/api/proyecto/lista');
  }

  public detail(id:number): Observable<Proyectos>{
    return this.http.get<Proyectos>(`https://portfolio-backend-danyalexandr.koyeb.app/api/proyecto/detail/${id}`);
  }

  public save(proyectos:Proyectos):Observable<any>{
    return this.http.post<any>('https://portfolio-backend-danyalexandr.koyeb.app/api/proyecto/crear', proyectos);
  }

  public update(id:number, proyectos:Proyectos):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/proyecto/update/${id}`, proyectos);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/proyecto/borrar/${id}`);
  }
}
