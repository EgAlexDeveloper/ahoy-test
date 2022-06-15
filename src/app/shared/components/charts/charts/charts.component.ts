import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'src/app/services/tatistics/types';

@Component({
  selector: 'ahoy-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input('results') results: ChartData[] = [];

  view: [number, number] = [600, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Count';

  constructor() { }

  ngOnInit(): void { }

}
