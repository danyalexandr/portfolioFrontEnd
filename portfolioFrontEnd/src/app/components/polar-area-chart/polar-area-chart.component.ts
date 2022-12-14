import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: [ './polar-area-chart.component.css' ]
})

export class PolarAreaChartComponent {

  english:string = "English";
  teamwork:string = "Team work";
  adaptabilidad:string = "Adaptabilidad";
  javaScript:string = "JavaScript";
  java:string = "Java";


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