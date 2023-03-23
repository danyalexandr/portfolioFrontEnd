import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorVisitasService {

  private URL_API = 'https://portfolio-backend-danyalexandr.koyeb.app/api/contador-visitas';
  
  constructor(private http: HttpClient) { }

  obtenerVisitas(): Observable<number> {
    return this.http.get<number>(this.URL_API);
  }
}
