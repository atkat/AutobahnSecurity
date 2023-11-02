import { useState, useEffect, useCallback } from 'react'
import { getWeatherData } from './utils/getWeatherData'

function App() {
  const [weatherData, setWeatherData] = useState<any>(null)
  const [city, setCity] = useState<string>('Berlin')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeatherData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const weatherDataResponse = await getWeatherData(city)
      setWeatherData(weatherDataResponse.data)
    } catch (error) {
      setError('City not found. Please check the city name.')
    } finally {
      setLoading(false)
    }
  }, [city])

  useEffect(() => {
    if (city) {
      fetchWeatherData()
    }
  }, [city, fetchWeatherData])

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setCity(e.target.value)
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter city name" value={city} onChange={handleCityChange} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <h2>
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : null}
    </div>
  )
}

export default App
