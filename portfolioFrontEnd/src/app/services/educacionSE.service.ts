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
    return this.http.get<Educacion[]>('injured-nora-danyalexandr.koyeb.app/educa/listaedu');
  }

  public detail(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(`injured-nora-danyalexandr.koyeb.app/detailedu/${id}`);
  }

  public save(educacion:Educacion):Observable<any>{
    return this.http.post<any>('injured-nora-danyalexandr.koyeb.app/educa/crearedu', educacion);
  }

  public update(id:number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(`injured-nora-danyalexandr.koyeb.app/educa/updateedu/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`injured-nora-danyalexandr.koyeb.app/educa/borraredu/${id}`);
  }
}
