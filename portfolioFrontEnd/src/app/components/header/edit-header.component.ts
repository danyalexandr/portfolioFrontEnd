import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {

  constructor(private auth:AuthorizationService, private router:Router) { }

  ngOnInit(): void {


  }
  onClick(){

  }
}
