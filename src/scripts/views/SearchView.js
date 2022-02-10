import View from './View.js';

class SearchView extends View {

    _errorMessage = 'Cannot find the city';

    _parentElement = document.querySelector('.weather__search--container');
    _searchInput = document.querySelector('.weather__search--input');

    constructor() {
        super();
    }

    addCitySelectHandler(handler) {
        this._parentElement.addEventListener('click', event => {
            event.preventDefault();

            const cityId = Object(this._getCityId(event));
            handler(cityId);
        });
    }

    addSearchHandler(handler) {
        this._searchInput.addEventListener('keyup', event => {
            event.preventDefault();

            if (this._searchInput.getAttribute('placeholder')) this.setMarginTopSearchInput();
            handler();    
        });           
    }

    getQuery() {
        return this._searchInput.value;
    }

    clearSearchResults() {
        const cityList = this._parentElement.querySelectorAll('.weather__search--autocomplete');
        if (cityList.length > 0) cityList.forEach(element => element.remove());
    }

    setMarginTopSearchInput(value = 40) {
        this._parentElement.style.setProperty('margin-top', `${value}%`);
    }

    _getCityId(event) {
        if (event.target.className === 'weather__search--city') {
            const cities = this._parentElement.querySelectorAll('.weather__search--city');
            for(let i = 0; i < cities.length; i++) {
                if (cities[i] === event.target) {
                    return i;
                }
            }
        }
    }

    _renderError() {
        return `
            <div class="weather__search--autocomplete">
                <p class="weather__search--city-error">${this._errorMessage}</p>
            </div>
        `;
    }

    _generateView() {
        return `
            <div class="weather__search--autocomplete">
                <ul class="weather__search--city-list">
                    ${this._data.map(city => this._generateCity(city)).join('')}
                </ul>
            </div>
        `;
    }

    _generateCity(city) {
        return `
            <div class="weather__search--city-container">
                <button class="weather__search--icon">
                    <i class="gg-search"></i>
                </button>
                <li class="weather__search--city">${city.name + ','} ${city.state != undefined ? city.state + ',' : ''} ${city.country}</li>
            </div>
        `;
    }
}

export default new SearchView();
