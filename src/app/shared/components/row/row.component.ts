import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[ahoy-row]',
  template: `
    <div class="row {{className}}">
      <ng-content></ng-content>
    </div>
  `
})
export class RowComponent implements OnInit {
  @Input('className') className: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
