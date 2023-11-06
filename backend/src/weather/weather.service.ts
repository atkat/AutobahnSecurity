import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'
import { MappedWeatherData, WeatherData } from '../types/types'
import { firstValueFrom } from 'rxjs'

// TODO: fix config module to be able to use env
//   `${process.env.OPENWEATHERMAP_API_URL}?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeatherData(city: string): Promise<WeatherData> {
    try {
      const response = this.httpService.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80761d58d37fb70d5b32eb97f2f41646&units=metric`
      )
      const firstValue = await firstValueFrom(response)
      console.log('fiirst value data', firstValue.data)
      return firstValue.data
    } catch (error) {
      throw new Error('Error fetching weather data')
    }
  }

  mapWeatherData(weatherData: WeatherData): MappedWeatherData {
    const {
      name: locationName,
      weather: [{ description, icon }],
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },

      visibility,
      wind: { speed: windSpeed },
      clouds: { all: cloudCoverage },
      sys: { country, sunrise, sunset }
    } = weatherData

    return {
      locationName,
      headline: description,
      icon,
      temp: Math.floor(temp),
      feelsLike: Math.floor(feels_like),
      temp_min,
      temp_max,
      pressure,
      humidity,
      visibility,
      windSpeed,
      cloudCoverage,
      country,
      sunrise,
      sunset
    }
  }
}
