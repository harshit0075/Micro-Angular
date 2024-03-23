import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather(city: string) {
    this.weatherService.getWeather(city)
      .subscribe(data => {
        this.weatherData = data;
      });
  }
}
