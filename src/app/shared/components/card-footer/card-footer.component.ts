import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ahoy-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {
  @Input('className') className: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
