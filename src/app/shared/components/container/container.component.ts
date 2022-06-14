import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <div class="{{isWide ? 'container-fluid' : 'container'}} {{className}}">
        <ng-content></ng-content>
    </div>
  `
})
export class ContainerComponent implements OnInit {
  @Input('className') className: string = '';
  @Input('isWide') isWide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
