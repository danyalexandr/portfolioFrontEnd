import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillSE {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  public lista(): Observable<Skill[]>{
    return this.http.get<Skill[]>('https://portfolio-backend-danyalexandr.koyeb.app/api/tecno/lista', this.httpOptions);
  }

  public detail(id:number): Observable<Skill>{
    return this.http.get<Skill>(`https://portfolio-backend-danyalexandr.koyeb.app/api/tecno/detail/${id}`, this.httpOptions);
  }

  public save(skill:Skill):Observable<any>{
    return this.http.post<any>('https://portfolio-backend-danyalexandr.koyeb.app/api/tecno/crear', skill, this.httpOptions);
  }

  public update(id:number, skill:Skill):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/tecno/update/${id}`, skill, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/tecno/borrar/${id}`, this.httpOptions);
  }
}
