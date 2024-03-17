import { useWeather } from "@/hooks/WeatherProvider";


export default function SearchBar() {
  const {getWeather, city, setCity} = useWeather();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleSearchClick = () => {
    getWeather(city);
  };
  return (
    <p>
      <label>Weather location:
          <input type="text" onChange={handleLocationChange} onKeyUp={handleKeyPress} />
      </label>
      <button  onClick={handleSearchClick}>Search</button>
    </p>
  );
}

