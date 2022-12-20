import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Skill } from 'src/app/model/skill';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { SkillSE } from 'src/app/services/skillSE.service';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: [ './polar-area-chart.component.css' ]
})

export class PolarAreaChartComponent {

  skill:Skill[] = [];
  english:string = "English";
  teamwork:string = "Team work";
  adaptabilidad:string = "Adaptabilidad";
  javaScript:string = "JavaScript";
  java:string = "Java";

  constructor(private router:Router, private skillSer:SkillSE, private auth: AuthorizationService) { }

  gOnInit(): void {

    this.cargarProyectos();
  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }

  cargarProyectos():void{
    this.skillSer.lista().subscribe(data => {this.skill = data});
  }

  borrar(){

  }

  // PolarArea
  public polarAreaChartLabels: string[] = [ this.english, this.teamwork, this.adaptabilidad, this.javaScript, this.java ];

  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: this.polarAreaChartLabels,
    datasets: [ {
      data: [ 60, 90, 100, 60, 50 ],
      label: 'Series 1'
    } ]
  };
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}