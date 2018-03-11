import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { reportBreakdown } from '../Models/report';

@Component({
  selector: 'app-day-snap',
  templateUrl: './day-snap.component.html',
  styleUrls: ['./day-snap.component.css']
})
export class DaySnapComponent implements OnInit, OnChanges {

  @Input() day: Array<reportBreakdown>;
  @Input() index: number;
  @Output() showDetailsOfThis: EventEmitter<{day: Array<reportBreakdown>, index: number}> = new EventEmitter;
  private temperature: number;
  private avgTemp: number;
  private date: string;
  
  constructor() { }

  ngOnChanges() {
    let accumulateTemp = 0;
    this.day.forEach(part => {
      accumulateTemp += part.main.temp;    
    })
    this.avgTemp = Math.round((accumulateTemp / this.day.length) * 100) / 100;  
  }

  ngOnInit() {
    this.date = this.day[0].dt_txt;
  }

  show() {
    this.showDetailsOfThis.emit({day: this.day, index: this.index});
  }



}
