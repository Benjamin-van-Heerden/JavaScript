import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
