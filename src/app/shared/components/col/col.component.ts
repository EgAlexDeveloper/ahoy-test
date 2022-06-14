import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-col',
  template: `
    <div class="{{className}}">
      <ng-content></ng-content>
    </div>
  `
})
export class ColComponent implements OnInit {
  @Input('className') className: string = 'col';
  constructor() { }

  ngOnInit(): void {
  }

}
