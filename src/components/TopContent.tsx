import { getFormattedTime } from "@/helpers/DateHelper";
import { getWeatherImage } from "@/helpers/UrlHelper";
import { useWeather } from "@/hooks/WeatherProvider";

export default function TopContent() {
    const {data, loading } = useWeather();
    return (
        (!loading && data.main && data.main.temp ?
        <>
            <section className="current-temperature">
                <div className="current-temperature__icon-container">
                    {data.weather ? <img src={getWeatherImage(data.weather[0].icon)} className="current-temperature__icon" alt={data.weather[0].main} /> : <></>}
                </div>
                <div className="current-temperature__content-container">
                    <div className="current-temperature__value">{Math.round(data.main.temp)}&deg;</div>
                    <div className="current-temperature__summary">{data.weather ? data.weather[0].description : ""}</div>
                </div>
            </section>


            <section className="current-stats">
                <div>
                    <div className="current-stats__value">{Math.round(data.main.temp_max)}&deg;</div>
                    <div className="current-stats__label">High</div>
                    <div className="current-stats__value">{Math.round(data.main.temp_min)}&deg;</div>
                    <div className="current-stats__label">Low</div>
                </div>
                <div>
                    <div className="current-stats__value">{Math.round(data.main.feels_like)}&deg;</div>
                    <div className="current-stats__label">Feel like</div>
                    <div className="current-stats__value">{data.wind.speed}mph</div>
                    <div className="current-stats__label">Wind</div>
                </div>
                <div>
                    <div className="current-stats__value">{getFormattedTime((data.sys.sunrise), data.sys.country)}</div>
                    <div className="current-stats__label">Sunrise</div>
                    <div className="current-stats__value">{getFormattedTime((data.sys.sunset), data.sys.country)}</div>
                    <div className="current-stats__label">Sunset</div>
                </div>
            </section>
        </>: <></>)
    );
}

