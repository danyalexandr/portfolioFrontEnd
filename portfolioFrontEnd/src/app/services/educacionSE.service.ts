import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionSE {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json , application/xml, text/html;charset=UTF-8, */*'
    })
  };

  public lista(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>('https://portfolio-backend-danyalexandr.koyeb.app/api/educacion/lista', this.httpOptions);
  }

  public detail(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(`https://portfolio-backend-danyalexandr.koyeb.app/api/educacion/detail/${id}`, this.httpOptions);
  }

  public save(educacion:Educacion):Observable<any>{
    return this.http.post<any>('https://portfolio-backend-danyalexandr.koyeb.app/api/educacion/crear', educacion, this.httpOptions);
  }

  public update(id:number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/educacion/update/${id}`, educacion, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/educacion/borrar/${id}`, this.httpOptions);
  }
}
