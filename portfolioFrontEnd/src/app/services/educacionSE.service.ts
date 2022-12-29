import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionSE {

  constructor(private http: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>('https://portfolio-backend-danyalexandr.koyeb.app/educacion/lista');
  }

  public detail(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(`https://portfolio-backend-danyalexandr.koyeb.app/detail/${id}`);
  }

  public save(educacion:Educacion):Observable<any>{
    return this.http.post<any>('https://portfolio-backend-danyalexandr.koyeb.app/educacion/crear', educacion);
  }

  public update(id:number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/educacion/update/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://portfolio-backend-danyalexandr.koyeb.app/educacion/borrar/${id}`);
  }
}
