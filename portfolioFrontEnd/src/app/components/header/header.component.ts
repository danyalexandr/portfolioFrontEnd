import { Component, OnInit, Output } from '@angular/core';
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

  constructor(private router: Router, private authorization:AuthorizationService ) { }
  
  ngOnInit(): void {
    this.authorization.obtenerDatos().subscribe(data =>
      {console.log(data);
      this.miPortfolio = data;
      });
  }

onClick(){
  this.displayMe = true;
//   this.router.navigate(['/login']);
}

mostrar(){
  console.log("click!");
 }

}
