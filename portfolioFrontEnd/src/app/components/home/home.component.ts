import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthorizationService) { }

  ngOnInit(): void {
  }

  public get isLogin():boolean{
    return this.auth.isAuthenticated();
  }
}
