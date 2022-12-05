import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayHome:boolean = false;
 

  constructor() { }

  ngOnInit(): void {
  }

  homeBtnClick(evento: boolean){
    console.log(evento + " este es un evento en HOME");
    this.displayHome = evento;
    console.log(this.displayHome);

  }
}
