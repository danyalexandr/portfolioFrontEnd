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
    return this.http.get<Proyectos[]>('https://injured-nora-danyalexandr.koyeb.app/proyecto/listapro');
  }

  public detail(id:number): Observable<Proyectos>{
    return this.http.get<Proyectos>(`https://injured-nora-danyalexandr.koyeb.app/detailpro/${id}`);
  }

  public save(proyectos:Proyectos):Observable<any>{
    return this.http.post<any>('https://injured-nora-danyalexandr.koyeb.app/proyecto/crearpro', proyectos);
  }

  public update(id:number, proyectos:Proyectos):Observable<any>{
    return this.http.put<any>(`https://injured-nora-danyalexandr.koyeb.app/proyecto/updatepro/${id}`, proyectos);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://injured-nora-danyalexandr.koyeb.app/proyecto/borrarpro/${id}`);
  }
}
