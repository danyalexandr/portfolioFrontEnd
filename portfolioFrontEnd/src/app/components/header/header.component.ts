import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayMe = false;
  miPortfolio:any;
  @Output() btnClick = new EventEmitter();
  
  constructor(private router: Router, private auth:AuthorizationService) { }
  
  ngOnInit(): void {
    this.auth.obtenerDatos().subscribe(data =>
      {
      this.miPortfolio = data;
      });
  }

onClick():void{
  this.displayMe = true;
  this.btnClick.emit(this.displayMe);
 //this.router.navigate(['/login']);
}

 public get isLogin():boolean{
  return this.auth.isUserLogin();
 }

 public btnLogout():void{
  this.auth.logout();
 }
}
