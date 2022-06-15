import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[ahoy-col]',
  template: `
    <div class="{{class}}">
      <ng-content></ng-content>
    </div>
  `
})
export class ColComponent implements OnInit {
  @Input('className') class: string = 'col';
  constructor() { }

  ngOnInit(): void {
  }

}
