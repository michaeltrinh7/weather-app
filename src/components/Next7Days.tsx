import { formatDate } from "@/helpers/DateHelper";
import { getWeatherImage } from "@/helpers/UrlHelper";
import { DailyDataInfo, useWeather } from "@/hooks/WeatherProvider";

function WeatherOnDay({data}:{data: DailyDataInfo}) {
    return (
        <div className="next-5-days__row">
            <div className="next-5-days__date">
                {formatDate(new Date((data.dt)*1000), "EEE")}
                <div className="next-5-days__label">{formatDate(new Date((data.dt)*1000), "dd/M")}</div>
            </div>

            <div className="next-5-days__icon">
                <img src={getWeatherImage(data.weather[0].icon, 2)}  alt={data.weather[0].main} width={50} />
                <div className="next-5-days__label">{data.weather[0].main}</div>
            </div>

            <div className="next-5-days__low">
                {Math.round(data.temp.min)} &deg;
                <div className="next-5-days__label">Low</div>
            </div>

            <div className="next-5-days__high">
                {Math.round(data.temp.max)}&deg;
                <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__rain">
                {data.rain??0}mm
                <div className="next-5-days__label">Rain</div>
            </div>

            <div className="next-5-days__wind">
                {data.wind_speed}m/s
                <div className="next-5-days__label">Wind</div>
            </div>
        </div>
    );
}

export default function Next7Days() {
    const {data8Days, loading} = useWeather();
    return (
        !loading && data8Days && data8Days.daily ?
        <section className="next-5-days">
            <h2 className="next-5-days__heading">Next 7 days</h2>
            <div className="next-5-days__container">
                {data8Days.daily.slice(1).map(d => (<WeatherOnDay data={d}  key={d.dt}></WeatherOnDay>))}
            </div>
        </section> : <></>
    );
}

