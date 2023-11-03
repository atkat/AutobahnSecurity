// TODO: add proptypes
const SelectCity = ({ city, handleCityChange }: any) => (
  <div className="pl-4 ">
    <input
      type="text"
      placeholder="Enter city name"
      value={city}
      onChange={handleCityChange}
      className="w-30vw h-3 p-2 mb-4 border rounded"
    />
  </div>
)

export default SelectCity
