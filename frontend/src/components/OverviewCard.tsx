import { DisplayedWeatherData } from '../types/types'

const OverviewCard = ({
  displayedWeatherData,
  loading
}: {
  displayedWeatherData: DisplayedWeatherData
  loading: boolean
}) =>
  displayedWeatherData ? (
    <div className="text-pink-200 md:w-1/2">
      <h2 className="text-3xl font-semibold mb-2 self-center ">
        Today in {displayedWeatherData.locationName}
      </h2>

      <div className="p-4 flex flex-col md:flex-row md:justify-evenly items-evenly h-30vh shadow-lg rounded-lg bg-pink-200">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center">
            <p className="text-3xl text-center font-bold text-gray-600 capitalize">
              {displayedWeatherData.headline}
            </p>
            <img src={`http://openweathermap.org/img/w/${displayedWeatherData.icon}.png`} alt="" />
          </div>
          <p className="text-7xl font-bold text-pink-500">{displayedWeatherData.temp}°C</p>
          <p className="text-lg text-gray-600">Feels Like: {displayedWeatherData.feelsLike}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-xs text-gray-600 mt-6 md:mt-0 md:ml-4 ">
          <p>Min Temperature: {displayedWeatherData.temp_min}°C</p>
          <p>Max Temperature: {displayedWeatherData.temp_max}°C</p>
          <p>Humidity: {displayedWeatherData.humidity}%</p>
          <p>Visibility: {displayedWeatherData.visibility} meters</p>
          <p>Cloud Coverage: {displayedWeatherData.cloudCoverage}%</p>
          <p>Wind Speed {displayedWeatherData.windSpeed} m/s</p>
          <p>Sunrise: {new Date(displayedWeatherData.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(displayedWeatherData.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  ) : null

export default OverviewCard
