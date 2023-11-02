// add proptypes

const SelectCity = ({ city, handleCityChange }: any) => (
  <div className="min-h-screen flex items-center justify-center bg-blue-200">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
        className="w-full p-2 mb-4 border rounded"
      />
    </div>
  </div>
)

export default SelectCity
