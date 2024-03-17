import { formatDate } from "@/helpers/DateHelper";
import { getWeatherImage } from "@/helpers/UrlHelper";
import { useWeather } from "@/hooks/WeatherProvider";

export default function WeatherByHour() {
    const {data8Days, loading } = useWeather();
    const hourlyData = (data8Days && data8Days.hourly ? [
                                                         data8Days.hourly[0],
                                                         data8Days.hourly[1],
                                                         data8Days.hourly[2],
                                                         data8Days.hourly[3],
                                                         data8Days.hourly[4],
                                                         data8Days.hourly[5],
                                                         data8Days.hourly[6],
                                                         ] : []);
    return (
            !loading && data8Days && data8Days.hourly ?
                <section className="weather-by-hour">
                    <h2 className="weather-by-hour__heading">Weather in next hours</h2>
                    <div className="weather-by-hour__container">
                        {hourlyData.map((data) => (
                            <div className="weather-by-hour__item" key={data.dt}>
                                <div className="weather-by-hour__hour">{formatDate(new Date((data.dt + data8Days.timezone_offset)*1000), "HH:mm")}</div>
                                <img src={getWeatherImage(data.weather[0].icon, 2)}  alt={data.weather[0].main} />{data.weather[0].main}
                            <div> {Math.round(data.temp)}&deg;</div></div>
                        ))
                        }
                    </div>
                </section>: <></>
        )
}

