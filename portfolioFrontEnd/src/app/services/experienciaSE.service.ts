import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaSE {

  expURL = 'http://localhost:8080/explaboral';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>('http://localhost:8080/explaboral/lista');
  }

  public detail(id:number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.expURL + `/detail/${id}`);
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>('http://localhost:8080/explab/create', experiencia);
  }

  public update(id:number, experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.expURL + `/update/${id}`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.expURL + `/delete/${id}`);
  }
}
