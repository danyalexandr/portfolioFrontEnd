import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaSE {

  expURL = 'https://injured-nora-danyalexandr.koyeb.app';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>('https://injured-nora-danyalexandr.koyeb.app/explaboral/lista');
  }

  public detail(id:number): Observable<Experiencia>{
    return this.http.get<Experiencia>(`https://injured-nora-danyalexandr.koyeb.app/explaboral/detail/${id}`);
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>('https://injured-nora-danyalexandr.koyeb.app/explaboral/create', experiencia);
  }

  public update(id:number, experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.expURL + `/update/${id}`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://injured-nora-danyalexandr.koyeb.app/explaboral/borrar/${id}`);
  }
}
