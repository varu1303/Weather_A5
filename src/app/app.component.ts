import { Component, OnInit } from '@angular/core';

import { FetchWeatherService } from './services/fetch-weather.service';
import { reportBreakdown } from './Models/report';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Salisbury | Weather';
  public place: object;
  public daysArray: object;
  public showThisDay: Array<reportBreakdown>;
  public nextDays: Array<any>;
  public activeDay = 0;
  constructor(private api: FetchWeatherService) {
  }

  ngOnInit() {
    this.api.getWeather()
      .subscribe(
        (data) => {
          this.place = {
            city: data.city.name,
            country: data.city.country
          }
          this.daysArray = {};
          // daysArray gets a property for each unique date which holds array of breakdown
          data.list.forEach(part => {
            if (this.daysArray.hasOwnProperty(part.dt_txt.substring(0, 11))) {
              this.daysArray[part.dt_txt.substring(0, 11)].push(part);
            } else {
              this.daysArray[part.dt_txt.substring(0, 11)] = [];
              this.daysArray[part.dt_txt.substring(0, 11)].push(part);
            }
          })
          let hasArray = '';
          let i = 0;
          this.nextDays = [];
          for(let date in this.daysArray) {
            if (this.daysArray.hasOwnProperty(date)) {
                this.nextDays.push(this.daysArray[date]);
            }
          }
          // First date's break down goes in here
          this.showThisDay =  this.nextDays[0];
        },
        (error) => {
          console.log('failed ', error);
        }
      )
  }

  changeDetailedDay(event) {
    this.showThisDay = event.day;
    this.activeDay = event.index;
  }
}
