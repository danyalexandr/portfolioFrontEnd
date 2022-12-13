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
    return this.http.get<Educacion[]>('http://localhost:8080/educa/listaedu');
  }

  public detail(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(`http://localhost:8080/educa/detailedu/${id}`);
  }

  public save(educacion:Educacion):Observable<any>{
    return this.http.post<any>('http://localhost:8080/educa/crearedu', educacion);
  }

  public update(id:number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(`http://localhost:8080/educa/updateedu/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/educa/borraredu/${id}`);
  }
}
