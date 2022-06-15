import { Component, OnInit } from '@angular/core';
import { TatisticsService } from 'src/app/services/tatistics/tatistics.service';
import { ResultType, SingleResult, Statistic } from 'src/app/services/tatistics/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TatisticsService]
})
export class HomeComponent implements OnInit {
  results: SingleResult[] = [];
  constructor(private tatisticsService: TatisticsService) { }

  onReceiveResults(statistics: Statistic[]) {

    let active: SingleResult = this.tatisticsService.mapStatisticsToResultsModel(ResultType.active, statistics);
    let recovered: SingleResult = this.tatisticsService.mapStatisticsToResultsModel(ResultType.recovered, statistics);
    let critical: SingleResult = this.tatisticsService.mapStatisticsToResultsModel(ResultType.critical, statistics);
    let newCase: SingleResult = this.tatisticsService.mapStatisticsToResultsModel(ResultType.new, statistics);
    let deaths: SingleResult = this.tatisticsService.mapDeathsStatisticsToResultsModel(statistics);
    
    this.results = [];
    this.results.push(active, recovered, critical, newCase, deaths);
  }

  ngOnInit(): void {
  }

}
