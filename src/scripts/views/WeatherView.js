import View from "./View.js";

class WeatherView extends View {
    _parentElement = document.querySelector(".weather__main-container");

    clearWeatherResults() {
        const weatherContainer = this._parentElement.querySelector(".weather__results--container");
        if (weatherContainer) weatherContainer.remove();
    }

    _getCurrentDate() {
        const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        ];
        const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        ];
        const currentDate = new Date();
        return `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    }

    _getWeatherIcon() {
        const icon = this._data.current.weather[0].icon.replace(/[dn]/g, "");
        const icons = {
        clear: "01",
        clouds: ["02", "03", "04"],
        rain: ["09", "10"],
        thunderstorm: "11",
        snow: "13",
        drizzle: "50",
        };
        for (const key in icons) {
        if (icons[key].includes(icon)) return key;
        }
    }

    _generateCurrentWeatherView() {
        return `
            <div class="weather__current--container">
                <div class="weather__current--header">
                    <h1>${this._data.name}, ${this._data.state}</h1>
                    <h2>${this._getCurrentDate()}</h2>
                </div>
                <div class="weather__current--temperature-container">
                    <div class="weather__current--present-weather">    
                        <img src="img/icons/${this._getWeatherIcon()}.png" class="weather__current--weather-icon"></img>
                        <h1 class="weather__current--temperature">${this._data.current.temp.toFixed(1)}&#8451</h1>
                        <h2 class="weather__current--cloudiness">${this._data.current.weather[0].description}</h2>
                    </div>
                </div>
                <div class="weather__current--statistics">

                </div>
            </div>               
        `;
    }

    _getHourlyWeather() {
        return this._data.hourly.slice(0, 10).map((hourlyWeather) => hourlyWeather);
    }

    _getForecastDate(hourlyWeatherObject) {
        return new Date(hourlyWeatherObject.dt * 1000);
    }
 
    _generateForecastIntervalsView() {
        const hourlyWeatherArray = this._getHourlyWeather();
        let forecastView = '';

        for (const hourlyWeatherIndex in hourlyWeatherArray) {
            const forecastDate = this._getForecastDate(hourlyWeatherArray[hourlyWeatherIndex]);

            forecastView += `
                <div class="weather__forecast--interval-statues">
                    <p class="weather__forecast--date">${String(forecastDate.getDate()).padStart(2, '0')}.${String(forecastDate.getMonth() + 1).padStart(2, '0')}</p>
                    <p class="weather__forecast--hour">${forecastDate.getHours()}:00</p>
                    <img src="img/icons/Clouds.png" alt="" class="weather__forecast--icon">
                    <p class="weather__forecast--temperature">${hourlyWeatherArray[hourlyWeatherIndex].temp.toFixed(1)}&#8451</p>
                </div> 
            `;
        }
        return forecastView;
    }

    _generateForecastView() {
        return `
            <div class="weather__forecast--container">
                <div class="weather__forecast--header">
                    <h2>Forecast</h2>
                </div>
                <div class="weather__forecast--intervals-container">    
                    ${this._generateForecastIntervalsView()}
                </div>
            </div>
        `;
    }

    _generateView() {
        return `
            <div class="weather__results--container">
                ${this._generateCurrentWeatherView()}
                ${this._generateForecastView()}
            </div>
        `;
    }
}

export default new WeatherView();
