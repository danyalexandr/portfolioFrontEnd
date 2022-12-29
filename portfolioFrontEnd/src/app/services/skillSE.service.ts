import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillSE {

  constructor(private http: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.http.get<Skill[]>('https://portfolio-backend-danyalexandr.koyeb.app/tecno/lista');
  }

  public detail(id:number): Observable<Skill>{
    return this.http.get<Skill>(`https://portfolio-backend-danyalexandr.koyeb.app/tecno/detail/${id}`);
  }

  public save(skill:Skill):Observable<any>{
    return this.http.post<any>('https://portfolio-backend-danyalexandr.koyeb.app/tecno/crear', skill);
  }

  public update(id:number, skill:Skill):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/tecno/update/${id}`, skill);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://portfolio-backend-danyalexandr.koyeb.app/tecno/borrar/${id}`);
  }
}
