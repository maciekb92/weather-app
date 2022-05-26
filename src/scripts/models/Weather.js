import { API_URL_WEATHER, API_KEY, MEASUREMENT_UNITS } from '../config.js';
import { getJson } from '../helpers.js';

class Weather {
    constructor() {
        this.weatherResults = {};
    }

    async loadWeatherResult(city) {
        try {
            this.weatherResults = await getJson(`${API_URL_WEATHER}?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=${MEASUREMENT_UNITS}`);
        } catch(error) {
            throw error;
        } 
    }

}

export default new Weather();
