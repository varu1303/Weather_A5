import { Component, OnInit, Input, OnChanges} from '@angular/core';

import { reportBreakdown } from './../Models/report';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})
export class DayDetailComponent implements OnInit, OnChanges {

  @Input() place: Object;
  @Input() day: Array<reportBreakdown>;
  private dateInView: string;

  constructor() { }

  ngOnChanges() {
    if (this.day) {
      this.dateInView = this.day[0].dt_txt;
    }
  }

  ngOnInit() {
  }

}
