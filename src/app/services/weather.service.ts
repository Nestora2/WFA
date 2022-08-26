import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

const WEATHER_END_POINT = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=13dc7b5fa5931e769c3cba13b5aee73d';

@Injectable()
export class WeatherService {

    private observableWater: Observable<any>;
    private weatherData: any;

    constructor(private http:HttpClient){}

    public getWeatherData(): any {
        if(this.observableWater) {
            return this.observableWater;
        }else{
            let path = WEATHER_END_POINT;
            let headers = new HttpHeaders();
            headers.append('Content-Type','application/json;charset=utf8');

            this.observableWater = this.http.get(path, {headers}).pipe(map((response: any) =>
            {
                this.observableWater = null;
                this.weatherData = response || null;
                return this.weatherData;
            }));
            return this.observableWater;
        }
    }

}