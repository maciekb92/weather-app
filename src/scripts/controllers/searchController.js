import searchView from '../views/SearchView.js';
import weatherView from '../views/WeatherView.js';
import search from '../models/Search.js';
import weather from '../models/Weather.js';
import { isObjectEmpty } from '../helpers.js';

const controlSearchResults = async function() {
    try {
        const query = searchView.getQuery();
        if (!query) {
            // Clear search results if Search input is empty
            searchView.clearSearchResults();
            weatherView.clearWeatherResults();
            return;
        } 
        await search.loadSearchResults(query);    
        const cities = search.searchResults;
        searchView.clearSearchResults();
        weatherView.clearWeatherResults();
        searchView.render(cities); 
    } catch(error) {
        throw error;
    }
}

const controlCitySelection = async function(cityId) {
    try {
        if (isObjectEmpty(cityId)) return;

        const marginTopSearchInputValue = 0;
        searchView.setMarginTopSearchInput(marginTopSearchInputValue);
        searchView.clearSearchResults();

        const cityResults = search.searchResults[cityId];
        await weather.loadWeatherResult(cityResults);
        const weatherResults = weather.weatherResults;
        const cityAndWeatherResults = { ...cityResults, ...weatherResults }
        setTimeout(() => weatherView.render(cityAndWeatherResults), 500);
    } catch(error) {
        throw error;
    }
}

const init = function() {
    searchView.addSearchHandler(controlSearchResults);
    searchView.addCitySelectHandler(controlCitySelection);
}

init();
