# WeatherApp

This project was created using Angular 5.

## Build

To host it on Heroku a `server.js` was added at the root of application which uses express to host a server and serve the index.html

  "engines": {
    "node": "8.4.0",
    "npm": "5.3.0"
  }
  
  and a script

  `"postinstall": "ng build --aot -prod"`
 added to package.json for project to be able to get hosted on Heroku.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
