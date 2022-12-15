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
    return this.http.get<Proyectos[]>('http://localhost:8080/proyecto/listapro');
  }

  public detail(id:number): Observable<Proyectos>{
    return this.http.get<Proyectos>(`http://localhost:8080/proyecto/detailpro/${id}`);
  }

  public save(proyectos:Proyectos):Observable<any>{
    return this.http.post<any>('http://localhost:8080/proyecto/crearpro', proyectos);
  }

  public update(id:number, proyectos:Proyectos):Observable<any>{
    return this.http.put<any>(`http://localhost:8080/proyecto/updatepro/${id}`, proyectos);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/proyecto/borrarpro/${id}`);
  }
}
