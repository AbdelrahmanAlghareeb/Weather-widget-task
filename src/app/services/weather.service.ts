import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { WeatherInfo } from '../models/WeatherInfo.class';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
  /**
   * @description : Return a mock data of weather info
   * @param date : date
   */
  getWeather(date:Date) : Observable<WeatherInfo> {
    const lowerDegree = this.getRandomArbitrary(0,30)
    const upperDegree = this.getRandomArbitrary(lowerDegree,lowerDegree + 5)
    const averageDegree = this.getRandomArbitrary(lowerDegree,upperDegree)
    let mockWeatherInfo : WeatherInfo = new WeatherInfo(lowerDegree,upperDegree,averageDegree,'rain','Zielona Góra, Poland',date)
    return of(mockWeatherInfo).pipe(delay(100))
  }
  private getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
}
