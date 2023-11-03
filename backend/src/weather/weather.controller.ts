import { Controller, Get, Param } from '@nestjs/common'
import { WeatherService } from './weather.service'
import { MappedWeatherData } from '../types/types'

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  async getWeatherData(@Param('city') city: string): Promise<MappedWeatherData> {
    const weatherDataResponse = await this.weatherService.getWeatherData(city)
    const mappedWeatherData = this.weatherService.mapWeatherData(weatherDataResponse as any) // TODO fix type

    // in case the rrequest fails, there is mock data for three possible entries
    // 'Berlin', 'London', Lisbon
    // so that you can see the fronted connects to the backend and displays data
    // const mockResult: MappedWeatherData = this.weatherService.mapWeatherData(useMockData(city))

    return mappedWeatherData
  }
}
