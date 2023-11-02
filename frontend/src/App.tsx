import { useState, useEffect, useCallback } from 'react'
import { getWeatherData } from './utils/getWeatherData'
import SelectCity from './components/SelectCity'
import WeatherCard from './components/WeatherCard'

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
    setCity(e.target.value)
  }

  return (
    <>
      <SelectCity city={city} handleCityChange={handleCityChange} />
      {error && <p className="text-red-500">Oops, apologies: {error}</p>}
      <WeatherCard displayedweatherData={weatherData} loading={loading} />
    </>
  )
}

export default App
