import { TestBed, inject } from '@angular/core/testing';

import { FetchWeatherService } from './fetch-weather.service';

describe('FetchWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchWeatherService]
    });
  });

  it('should be created', inject([FetchWeatherService], (service: FetchWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
