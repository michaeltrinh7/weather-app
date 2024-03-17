import { useWeather } from "@/hooks/WeatherProvider";
import { formatDate } from "../helpers/DateHelper";

export default function Header() {
  const {data, location, loading} = useWeather();

  return (!loading && data && data.sys?
    <header className="location-and-date">
      <h1 className="location-and-date__location">{location}</h1>
      <div>{formatDate(new Date((data.dt + data.timezone)*1000))}</div>
    </header> : <></>
  );
}

