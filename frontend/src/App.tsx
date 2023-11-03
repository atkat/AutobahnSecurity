import { useState, useEffect, useCallback } from 'react'
import { getWeatherData } from './utils/getWeatherData'
import SelectCity from './components/SelectCity'
import OverviewCard from './components/OverviewCard'
import { debounce } from 'lodash'

function App() {
  const [displayedWeatherData, setDisplayedWeatherData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState<string>('')

  const fetchWeatherData = debounce(async (value) => {
    if (!value || value.length < 3) {
      return
    }

    if (value === query) {
      return
    }
    try {
      setLoading(true)
      setError(null)
      const weatherDataResponse = await getWeatherData(query)
      setDisplayedWeatherData(weatherDataResponse.data)
    } catch (error) {
      setError('City not found. Please check the city name.')
    } finally {
      setLoading(false)
    }
  }, 400)

  const debouncedSearch = useCallback((value: string) => fetchWeatherData(value), [])

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setQuery(e.target.value)
    setQuery(value)
    debouncedSearch(value)
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
      {error && <p className="text-red-500">Oops, apologies: {error}</p>}
      {loading ? (
        <p className="font-semibold text-gray-400">Loading...</p>
      ) : (
        <OverviewCard displayedWeatherData={displayedWeatherData} loading={loading} />
      )}
    </div>
  )
}

export default App
