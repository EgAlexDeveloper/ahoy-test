import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/Http/http.service';
import { ContriesResponse, Country } from './types';

@Injectable()
export class CountriesService {

  constructor(private http: HttpService) { }

  getAll(): Observable<Country[]> {
    return new Observable(observer => {
      this.http
        .get('countries')
        .subscribe((res: ContriesResponse) => {
          observer.next(res.response.map((country, index: number) => ({
            id: index,
            name: country
          })))
        });
    });
  }
}
