import View from './View.js';

class WeatherView extends View {

    _parentElement = document.querySelector('.weather__main-container');

    clearWeatherResults() {
        const weatherContainer = this._parentElement.querySelector('.weather__results--container');
        if (weatherContainer) weatherContainer.remove();
    }

    _getCurrentDate() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        return `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    }

    _generateView() {
        console.log(this._data.weather[0].main);
        return `
            <div class="weather__results--container">
                <div class="weather__current--container">
                    <div class="weather__current--header">
                        <h1>${this._data.name}, ${this._data.sys.country}</h1>
                        <h2>${this._getCurrentDate()}</h2>
                    </div>
                    <div class="weather__current--temperature-container">
                        <div class="weather__current--present-weather">
                            <img src="img/icons/${this._data.weather[0].main}.png" class="weather__current--weather-icon"></img>
                            <h1 class="weather__current--temperature">0</h1>
                            <h2 class="weather__current--cloudiness">Overcloud</h2>
                        </div>
                        <div class="weather__current--statistics">
            
                        </div>
                    </div>
                </div>
                <div class="weather__forecast--container">
                    <div class="weather__forecast--header">
                        <h2>Forecast</h2>
                    </div>
                    <div class="weather__forecast--intervals-container">
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                        <div class="weather__forecast--interval-statues">
                            <p class="weather__forecast--date">04.01</p>
                            <p class="weather__forecast--hour">6:00</p>
                            <img src="img/icons/Cloudy.png" alt="" class="weather__forecast--icon">
                            <p class="weather__forecast--temperature">4</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

export default new WeatherView();
