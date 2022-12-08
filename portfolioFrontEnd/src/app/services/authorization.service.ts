import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  

  private strUrlApi:string;

  constructor(private http: HttpClient, private router: Router) { 
    this.strUrlApi = '../assets/data/user.json';
  }
  public loginSimple(email:string, pwd:string): void{
    this.http.get(this.strUrlApi).subscribe((response:any) => {if(response.token !=null){
      localStorage.setItem('token', response.token);
      this.router.navigate(['/home'])
    }});
  }

  public logout():void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  public isUserLogin(){
    return (localStorage.getItem('token') !=null);
    
  }
  obtenerDatos(): Observable<any>{
    return this.http.get('../assets/data/user.json');
  }
}
 