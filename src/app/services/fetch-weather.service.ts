import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { weatherResponse } from './../Models/weatherResponse';
import 'rxjs/add/operator/map';

import APP_CONSTANTS from './../../assets/constants';

@Injectable()
export class FetchWeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${APP_CONSTANTS.LAT}&lon=${APP_CONSTANTS.LON}&units=${APP_CONSTANTS.UNIT}&APPID=${APP_CONSTANTS.APP_ID}`;

    return this.httpClient.get<weatherResponse>(url);
  }

}
