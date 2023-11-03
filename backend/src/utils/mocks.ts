import { WeatherData } from '../types/types'

const londonWeatherResponse = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
  base: 'stations',
  main: {
    temp: 9.63,
    feels_like: 5.77,
    temp_min: 7.94,
    temp_max: 10.43,
    pressure: 971,
    humidity: 85
  },
  visibility: 10000,
  wind: { speed: 9.77, deg: 250 },
  clouds: { all: 75 },
  dt: 1698954359,
  sys: { type: 2, id: 2075535, country: 'GB', sunrise: 1698908097, sunset: 1698942785 },
  timezone: 0,
  id: 2643743,
  name: 'London',
  cod: 200
}

const lisbonWeatherResponse = {
  coord: { lon: -9.1333, lat: 38.7167 },
  weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' }],
  base: 'stations',
  main: {
    temp: 14.56,
    feels_like: 13.85,
    temp_min: 14,
    temp_max: 15.04,
    pressure: 1015,
    humidity: 68
  },
  visibility: 10000,
  wind: { speed: 5.14, deg: 290 },
  clouds: { all: 40 },
  dt: 1698954838,
  sys: { type: 1, id: 6901, country: 'PT', sunrise: 1698908637, sunset: 1698946568 },
  timezone: 0,
  id: 2267057,
  name: 'Lisbon',
  cod: 200
}

const berlinWeatherResponse = {
  coord: { lon: 13.4105, lat: 52.5244 },
  weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
  base: 'stations',
  main: {
    temp: 10.78,
    feels_like: 10.24,
    temp_min: 10.05,
    temp_max: 11.57,
    pressure: 976,
    humidity: 89
  },
  visibility: 10000,
  wind: { speed: 6.26, deg: 166, gust: 9.39 },
  rain: { '1h': 0.75 },
  clouds: { all: 100 },
  dt: 1698954443,
  sys: { type: 2, id: 2011538, country: 'DE', sunrise: 1698905013, sunset: 1698939371 },
  timezone: 3600,
  id: 2950159,
  name: 'Berlin',
  cod: 200
}

export const useMockData = (city: string): WeatherData => {
  switch (city) {
    case 'London':
      return londonWeatherResponse
    case 'Lisbon':
      return lisbonWeatherResponse
    case 'Berlin':
      return berlinWeatherResponse
    default:
      throw new Error('City not found')
  }
}
