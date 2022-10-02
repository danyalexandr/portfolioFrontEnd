import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyects:string = 'Proyects';

  constructor() { }

  ngOnInit(): void {
  }

}
