//@ts-nocheck

import { useState, useEffect, useCallback } from 'react'
import { getWeatherData } from './utils/getWeatherData'
import SelectCity from './components/SelectCity'
import OverviewCard from './components/WaetherOverviewCard'
import WeatherOverviewCard from './components/WaetherOverviewCard'

function App() {
  const [displayedWeatherData, setDisplayedWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

  const fetchWeatherData = useCallback(async (value: any) => {
    try {
      setLoading(true)
      setError('')
      const weatherDataResponse = await getWeatherData(value)
      setDisplayedWeatherData(weatherDataResponse.data)
    } catch (error) {
      setError(error)
      setDisplayedWeatherData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleCityChange = (e: any) => {
    const { value } = e.target
    setQuery(value)
    fetchWeatherData(value)
  }

  useEffect(() => {
    if (query) {
      fetchWeatherData(query)
    }
  }, [query, fetchWeatherData])

  return (
    <div className="bg-gray-800 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-gray-400 mb-3">The Weather Stop</h1>
      <SelectCity city={query} handleCityChange={handleCityChange} />
      {error && <p className="text-red-500">Oops, apologies, can you try again?</p>}
      {loading ? (
        <p className="font-semibold text-gray-400">Loading...</p>
      ) : (
        <WeatherOverviewCard displayedWeatherData={displayedWeatherData} loading={loading} />
      )}
    </div>
  )
}

export default App
