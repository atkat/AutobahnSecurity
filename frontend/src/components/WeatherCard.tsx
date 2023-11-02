import { WeatherCardProps } from '../types/types'

const WeatherCard = ({ displayedweatherData, loading }: WeatherCardProps) => (
  <div className="App">
    {loading ? (
      <p>Loading...</p>
    ) : displayedweatherData ? (
      <div>
        <h2>
          Weather in {displayedweatherData.locationName}, {displayedweatherData.country}
        </h2>
        <p>Temperature: {displayedweatherData.temp}°C</p>
        <p>Weather: {displayedweatherData.headline}</p>
      </div>
    ) : null}
  </div>
)

export default WeatherCard
