import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000'

export const getWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/${city}`)
    return response.data
  } catch (error) {
    throw new Error('Error fetching calling the api')
  }
}
