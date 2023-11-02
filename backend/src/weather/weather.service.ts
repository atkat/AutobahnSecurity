import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'
import { WeatherData } from '../../types/types'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeatherData(city: string): Promise<AxiosResponse<WeatherData>> {
    try {
      const response = this.httpService.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
      )

      return firstValueFrom(response)
    } catch (error) {
      throw new Error(`Failed to fetch weather data for ${city}.`)
    }
  }
}
