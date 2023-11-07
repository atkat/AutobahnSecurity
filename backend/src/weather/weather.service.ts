import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { MappedWeatherData, WeatherData } from '../types/types'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeatherData(city: string): Promise<WeatherData> {
    try {
      const response = this.httpService.get(
<<<<<<< HEAD
        `${process.env.OPENWEATHERMAP_API_URL}?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
=======
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80761d58d37fb70d5b32eb97f2f41646&units=metric`
>>>>>>> 467d446de4b1c507499543bf7c588cfafe6a632a
      )
      const firstValue = await firstValueFrom(response)
      return firstValue.data
    } catch (error) {
      console.error('Error fetching weather data from OpenWeatherMap API:', error.message)
    }
  }

  mapWeatherData(weatherData: WeatherData): MappedWeatherData {
    const formatUnixTimestamp = (unixTime): string => {
      const date = new Date(unixTime * 1000)
      return `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`
    }

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
      temp_min: Math.floor(temp_min),
      temp_max: Math.floor(temp_max),
      pressure,
      humidity,
      visibility,
      windSpeed,
      cloudCoverage,
      country,
      sunrise: formatUnixTimestamp(sunrise),
      sunset: formatUnixTimestamp(sunset)
    }
  }
}
