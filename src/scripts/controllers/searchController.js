import searchView from '../views/SearchView.js';
import search from '../models/Search.js';
import weather from '../models/Weather.js';

const controlSearchResults = async function() {
    try {
        const query = searchView.getQuery();
        if (!query) {
            // Clear search results if Search input is empty
            searchView.clearSearchResults();
            return;
        } 

        await search.loadSearchResults(query);    
        const cities = search.searchResults;
        searchView.clearSearchResults();
        searchView.render(cities); 
    } catch(error) {
        throw error;
    }
}

const controlCitySelection = async function(cityName) {
    try {
        if (!cityName) return;
        await weather.loadWeatherResult(cityName);
    } catch(error) {
        throw error;
    }
}

const init = function() {
    searchView.addSearchHandler(controlSearchResults);
    searchView.addCitySelectHandler(controlCitySelection);
}

init();