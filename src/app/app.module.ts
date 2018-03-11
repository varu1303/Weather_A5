import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { DaySnapComponent } from './day-snap/day-snap.component';

import { FetchWeatherService } from './services/fetch-weather.service';


@NgModule({
  declarations: [
    AppComponent,
    DayDetailComponent,
    DaySnapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FetchWeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
