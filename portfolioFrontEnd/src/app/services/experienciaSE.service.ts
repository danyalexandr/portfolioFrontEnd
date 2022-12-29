import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaSE {

  expURL = 'https://portfolio-backend-danyalexandr.koyeb.app';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>('https://portfolio-backend-danyalexandr.koyeb.app/exp/lista');
  }

  public detail(id:number): Observable<Experiencia>{
    return this.http.get<Experiencia>(`https://portfolio-backend-danyalexandr.koyeb.app/exp/detail/${id}`);
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>('https://portfolio-backend-danyalexandr.koyeb.app/exp/crear', experiencia);
  }

  public update(id:number, experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.expURL + `/update/${id}`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://portfolio-backend-danyalexandr.koyeb.app/exp/borrar/${id}`);
  }
}
