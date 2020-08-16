import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherInfo } from '../models/WeatherInfo.class';
import { WeatherService } from '../services/weather.service';

/**
 *  This component is a weather widget that display all the weather info
 */
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnChanges {
  @Input('color') color :string 
  @Input('date') date :Date =  new Date();
  days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  currentHour 
  currentDay

  weatherInfo : WeatherInfo 

  constructor(private weatherSrvc:WeatherService) { }

  ngOnChanges(change:SimpleChanges){
    if(change.date && change.date.currentValue){
      this.getWeatherInfo(change.date.currentValue)
    }
  }

  /**
   * @description : Get the hours and the day from the date seperately
   * @param date : Date
   */
  splitDate(date:Date){
    const _date = new Date(date)
    if ( !(_date instanceof Date)  ) return
    this.currentHour = _date.getHours()
    this.currentDay = _date.getDay()
  }

  /**
   *  @description : Get Weather from Backend according to the chosen date
   * @param date 
   */
  getWeatherInfo(date){
    this.weatherSrvc.getWeather(date)
      .subscribe(
        weatherInfo=> this.weatherInfo = weatherInfo ,
        err=>alert('failed to get weather data')
      )
    this.splitDate(this.date)
  }

}
