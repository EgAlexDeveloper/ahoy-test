import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ahoy-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {
  @Input('className') className: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
