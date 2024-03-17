const weather_app_url = import.meta.env.VITE_WEATHER_APP_URL;
const weather_app_weather_image_url = import.meta.env.VITE_WEATHER_APP_WEATHER_IMAGE_URL;
const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;
export function getWeatherApi(location: string): string {
    return `${weather_app_url}/weather/?q=${location}&appid=${weather_api_key}&units=metric`
}

export function getWeather8DaysApi(lat: number, lon: number): string {
    return `${weather_app_url}/onecall?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
}

export function getWeatherImage(icon: string, size: number = 4): string {
    return `${weather_app_weather_image_url}/wn/${icon}@${size}x.png`;
}
