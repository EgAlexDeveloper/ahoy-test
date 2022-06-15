import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { Country } from 'src/app/services/countries/types';
import { TatisticsService } from 'src/app/services/tatistics/tatistics.service';
import { Statistic } from 'src/app/services/tatistics/types';

@Component({
  selector: 'ahoy-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [CountriesService, TatisticsService]
})
export class SearchComponent implements OnInit {
  @Output() onReceiveResults = new EventEmitter();
  countryList: Country[] = [];
  isSubmited: boolean = false;

  covidSearchForm = new FormGroup({
    country: new FormControl('', Validators.required)
  });

  constructor(
    private countriesService: CountriesService,
    private tatisticsService: TatisticsService
  ) { }

  fetchCountires() {
    this.countriesService
      .getAll()
      .subscribe((countryList: Country[]) => {
        this.countryList = [...countryList];
      });
  }

  onSubmit() {
    this.isSubmited = true;

    if (this.covidSearchForm.valid) {
      // this.tatisticsService
      //   .getCurrentResultsByCountryName(this.covidSearchForm.controls.country.value!)
      //   .subscribe((statistics: Statistics[]) => {
      //      console.log(statistics)
      //   });

      this.tatisticsService
        .getHistoryResultsByCountryName(this.covidSearchForm.controls.country.value!)
        .subscribe((statistics: Statistic[]) => {
          this.onReceiveResults.emit(statistics);
        });
    }
  }

  ngOnInit(): void {
    this.fetchCountires();
  }

}
