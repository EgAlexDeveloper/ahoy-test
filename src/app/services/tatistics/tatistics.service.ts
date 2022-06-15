import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { HttpService } from 'src/app/shared/services/Http/http.service';
import { ResultType, SingleResult, Statistic, StatisticsResponse } from './types';

@Injectable()
export class TatisticsService {
  constructor(private http: HttpService) { }

  getCurrentResultsByCountryName(name: string): Observable<Statistic[]> {
    return new Observable(observer => {
      this.http
        .get(`statistics?country=${name}`)
        .subscribe((res: StatisticsResponse) => {
          observer.next(
            res.response.map((statistic: Statistic) => ({
              cases: {
                new: statistic.cases.new,
                active: statistic.cases.active,
                critical: statistic.cases.critical,
                recovered: statistic.cases.recovered,
                M_pop: statistic.cases.M_pop,
                total: statistic.cases.total
              },
              continent: statistic.continent,
              country: statistic.country,
              day: statistic.day,
              deaths: {
                M_pop: statistic.deaths.M_pop,
                new: statistic.deaths.new,
                total: statistic.deaths.total
              },
              time: statistic.time
            })))
        });
    });
  }

  getHistoryResultsByCountryName(name: string): Observable<Statistic[]> {
    return new Observable(observer => {
      this.http
        .get(`history?country=${name}`)
        .subscribe((res: StatisticsResponse) => {
          observer.next(
            res.response.map((statistic: Statistic) => ({
              cases: {
                new: statistic.cases.new,
                active: statistic.cases.active,
                critical: statistic.cases.critical,
                recovered: statistic.cases.recovered,
                M_pop: statistic.cases.M_pop,
                total: statistic.cases.total
              },
              continent: statistic.continent,
              country: statistic.country,
              day: statistic.day,
              deaths: {
                M_pop: statistic.deaths.M_pop,
                new: statistic.deaths.new,
                total: statistic.deaths.total
              },
              time: statistic.time
            })))
        });
    });
  }

  mapStatisticsToResultsModel(name: ResultType, statistics: Statistic[]): SingleResult {
    return {
      name: name,
      data: statistics.map((item: Statistic) => (
        {
          name: new Date(item.day).toUTCString(), value: item.cases[name]
        }
      ))
    }
  }

  mapDeathsStatisticsToResultsModel(statistics: Statistic[]): SingleResult {
    return {
      name: 'deaths',
      data: statistics.map((item: Statistic) => (
        {
          name: new Date(item.day).toUTCString(), value: item.deaths.total
        }
      ))
    }
  }
}
