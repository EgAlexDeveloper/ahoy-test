import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ahoy-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  covidSearchForm = new FormGroup({
    country: new FormControl('', Validators.required)
  });

  constructor() { }

  onSubmit() {
    alert()
  }

  ngOnInit(): void {
  }

}
