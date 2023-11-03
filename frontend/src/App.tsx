import { useState, useEffect, useCallback } from 'react'
import { getWeatherData } from './utils/getWeatherData'
import SelectCity from './components/SelectCity'
import OverviewCard from './components/OverviewCard'

function App() {
  const [displayedWeatherData, setDisplayedWeatherData] = useState<any>(null)
  const [city, setCity] = useState<string>('Berlin')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeatherData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const weatherDataResponse = await getWeatherData(city)
      setDisplayedWeatherData(weatherDataResponse.data)
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
    <div className="bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-400 ml-4 mb-3">The Weather Stop</h1>
      <SelectCity city={city} handleCityChange={handleCityChange} />
      {error && <p className="text-red-500">Oops, apologies: {error}</p>}
      {loading ? (
        <p className="text-2xl font-semibold text-gray-400">Loading...</p>
      ) : (
        <OverviewCard displayedWeatherData={displayedWeatherData} loading={loading} />
      )}
    </div>
  )
}

export default App
