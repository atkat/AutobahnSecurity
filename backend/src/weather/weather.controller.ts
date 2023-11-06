//@ts-check
import { Controller, Get, Param } from '@nestjs/common'
import { WeatherService } from './weather.service'
import { MappedWeatherData } from '../types/types'
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  async getWeatherData(@Param('city') city: string): Promise<MappedWeatherData> {
    const mappedWeatherDataResponse = await this.weatherService
      .getWeatherData(city)
      .then((res) => this.weatherService.mapWeatherData(res))
      .catch(() => {
        throw new Error('Error fetching weather data')
      })

    return mappedWeatherDataResponse
  }
}
