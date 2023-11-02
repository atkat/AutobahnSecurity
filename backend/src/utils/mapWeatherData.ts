import { WeatherData, MappedWeatherData } from 'types/types'

export const mapWeatherData = (weatherData: WeatherData): MappedWeatherData => {
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
    temp,
    feels_like,
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
