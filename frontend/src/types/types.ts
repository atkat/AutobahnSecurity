export type DisplayedweatherData = {
  locationName: string
  headline: string
  icon: string
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  visibility: number
  windSpeed: number
  cloudCoverage: number
  country: string
  sunrise: number
  sunset: number
}

export type WeatherCardProps = {
  displayedweatherData: DisplayedweatherData
  loading: boolean
}
