export type WeatherData = {
  coord: { lon: number; lat: number }
  weather: { id: number; main: string; description: string; icon: string }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: { speed: number; deg: number }
  clouds: { all: number }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export type MappedWeatherData = {
  locationName: string
  // coord: { lon: number; lat: number } => could use in a map
  headline: string
  icon: string
  temp: number
  feelsLike: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  visibility: number
  windSpeed: number
  cloudCoverage: number
  country: string
  sunrise: string
  sunset: string
}
