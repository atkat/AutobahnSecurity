import { Controller, Get, Param } from '@nestjs/common'
import { WeatherService } from './weather.service'
import { MappedWeatherData } from '../../types/types'
import { useMockData } from 'src/utils/mocks'

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  async getWeatherData(@Param('city') city: string): Promise<MappedWeatherData> {
    // const weatherDataResponse = await this.weatherService.getWeatherData(city)
    // const mappedWeatherData = this.weatherService.mapWeatherData(weatherDataResponse.data)

    const mockResult: MappedWeatherData = this.weatherService.mapWeatherData(useMockData(city))

    return mockResult
  }
}
