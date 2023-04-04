import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaSE {

  expURL = 'https://portfolio-backend-danyalexandr.koyeb.app';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>('https://portfolio-backend-danyalexandr.koyeb.app/api/exp/lista', this.httpOptions);
  }

  public detail(id:number): Observable<Experiencia>{
    return this.http.get<Experiencia>(`https://portfolio-backend-danyalexandr.koyeb.app/api/exp/detail/${id}`, this.httpOptions);
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>('https://portfolio-backend-danyalexandr.koyeb.app/api/exp/crear', experiencia, this.httpOptions);
  }

  public update(id:number, experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.expURL + `/update/${id}`, experiencia, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/exp/borrar/${id}`, this.httpOptions);
  }
}
