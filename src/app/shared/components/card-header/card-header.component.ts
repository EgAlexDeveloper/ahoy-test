import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ahoy-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {
  @Input('className') className: string = '';
  @Input('title') title: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
