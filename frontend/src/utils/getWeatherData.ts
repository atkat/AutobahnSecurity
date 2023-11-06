import axios, { AxiosResponse } from 'axios'

const API_BASE_URL = 'http://localhost:5000'

export const getWeatherData = async (city: string): Promise<AxiosResponse<any, any>> => {
  try {
    return await axios.get(`${API_BASE_URL}/weather/${city}`)
  } catch (error) {
    throw new Error('Please enter a valid city name ')
  }
}
