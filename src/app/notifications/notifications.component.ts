 import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  private weatherData: any = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData();
    
  }

  public getWeatherData(){
    this.weatherService.getWeatherData().subscribe(
        data => {
            this.weatherData = data;
            console.log('Weather Data: ', this.weatherData);
        }
    )
  }


}
