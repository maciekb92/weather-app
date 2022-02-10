import { API_URL_CITY, API_KEY, CITY_LIMIT } from '../config.js';
import { getJson } from '../helpers.js';

class Search {
    constructor() {
        this.searchResults = [];
    }

    async loadSearchResults(query) {
        try {
            const searchData = await getJson(`${API_URL_CITY}?q=${query}&limit=${CITY_LIMIT}&appid=${API_KEY}`);
            this.searchResults = searchData.map(city => {
                return {
                    name: city.name,
                    country: city.country,
                    state: city.state,
                    lat: city.lat,
                    lon: city.lon
                };
            });
        } catch(error) {
            throw error;
        }
    }
}

export default new Search();
