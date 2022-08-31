import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: [ './polar-area-chart.component.css' ]
})

export class PolarAreaChartComponent {
  // PolarArea
  public polarAreaChartLabels: string[] = [ 'ENGLISH', 'TEAMWORK', 'ADAPTABILITY', 'JAVASCRIPT', 'JAVA' ];
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