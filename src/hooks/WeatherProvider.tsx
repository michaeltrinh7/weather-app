import { ReactNode, createContext, useContext, useState } from "react";
import axios from "axios";
import { getWeather8DaysApi, getWeatherApi } from "@/helpers/UrlHelper";

interface WeatherInfo {
    icon: string,
    description: string,
    main: string,
}
interface DataInfo {
    dt: number,
    feels_like: number,
    weather: WeatherInfo[],
}
export interface HourlyDataInfo extends DataInfo {
    temp: number
}
export interface DailyDataInfo extends DataInfo {
    temp: {
        min: number,
        max: number,
    },
    rain: number,
    wind_speed: number,
}

export interface Data8DaysInfo  {
    timezone_offset: number
    daily: DailyDataInfo[],
    hourly: HourlyDataInfo[]
}
interface WeatherContextType {
    data: {
        dt: number,
        coord: {
            lat: number,
            lon: number,
        }
        weather: WeatherInfo[],
        name: string,
        sys: { country: string, sunrise: number, sunset: number },
        main: { feels_like: number, temp: number, temp_min: number, temp_max: number},
        timezone: number,
        wind: { speed: number }
    },
    data8Days: Data8DaysInfo,
    getWeather: (location: string) => void,
    loading: boolean,
    location: string,
    city: string,
    setCity: (city: string) => void,
    setLocation: (location: string) => void,
}
const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType);
export const useWeather = () => useContext(WeatherContext)

type WeatherProviderProps = {
    children?: ReactNode
}
export default function WeatherProvider({ children}: WeatherProviderProps) {
    const [city, setCity] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>({});
    const [data8Days, setData8Days] = useState<any>({});

    //const date = new Date();

    const fetchData = async (city: string) => {
        
        try {
            setLoading(true);
            axios
                .get(
                    getWeatherApi(city)
                )
                .then((res) => {
                    if (res.data) {
                        setData(res.data);
                        setLocation(`${city}, ${res.data.sys.country}`)
                        fetchData8Days(res.data.coord.lat,res.data.coord.lon)
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    if (err.code === "ERR_BAD_REQUEST") {
                        alert(err.response.data.message);
                    }
                    setLoading(false);
                });
        } catch (error) {
            setLoading(false);
        }
    };

    const fetchData8Days = async (lat: number, lon: number) => {
        setData8Days({});
        try {
            setLoading(true);
            axios
                .get(
                    getWeather8DaysApi(lat,lon)
                )
                .then((res) => {
                    if (res.data) {
                        setData8Days(res.data);
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    alert(err.response.data.message);
                    setLoading(false);
                });
        } catch (error) {
            setLoading(false);
        }
    };

    const getWeather = async (city: string) => {
        setData({});
        setData8Days({});
        await fetchData(city);
    };

    return (
        <WeatherContext.Provider value={{data, data8Days,  getWeather, loading, city, location, setLocation, setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}