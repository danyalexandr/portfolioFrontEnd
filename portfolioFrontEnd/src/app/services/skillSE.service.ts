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
    return this.http.get<Skill[]>('https://injured-nora-danyalexandr.koyeb.app/tecno/listatecno');
  }

  public detail(id:number): Observable<Skill>{
    return this.http.get<Skill>(`https://injured-nora-danyalexandr.koyeb.app/tecno/detailtecno/${id}`);
  }

  public save(skill:Skill):Observable<any>{
    return this.http.post<any>('https://injured-nora-danyalexandr.koyeb.app/tecno/creartecno', skill);
  }

  public update(id:number, skill:Skill):Observable<any>{
    return this.http.put<any>(`https://injured-nora-danyalexandr.koyeb.app/tecno/updatetecno/${id}`, skill);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://injured-nora-danyalexandr.koyeb.app/tecno/borrartecno/${id}`);
  }
}
