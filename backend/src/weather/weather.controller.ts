import { Controller, Get, Param } from '@nestjs/common'
import { WeatherService } from './weather.service'
import { AxiosResponse } from 'axios'
import { WeatherData } from '../../types/types'

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  getWeatherData(@Param('city') city: string): Promise<AxiosResponse<WeatherData>> {
    return this.weatherService.getWeatherData(city)
  }
}
