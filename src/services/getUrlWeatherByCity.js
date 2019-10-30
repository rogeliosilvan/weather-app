
import { api_key, url_weather} from './../constants/api_url';

const getUrlWeatherByCity = city => {

    return `${url_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;