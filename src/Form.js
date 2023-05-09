import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Overview from "./Overview";

export default function Form() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({});
  const [hero, setHero] = useState({});

  function showData(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setHero({
      name: response.data.name,
      country: response.data.sys.country,
    });
    console.log(response);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getData(event) {
    event.preventDefault();
    let apiKey = `cf6b50b908fa2e0baca3eed8a569a5f6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  let form = (
    <form id="search-form">
      <div className="row">
        <span className="col-lg-7">
          <input
            type="text"
            placeholder="City search"
            className="form-control"
            id="city-input"
            autocomplete="off"
          />
        </span>

        <span class="col-lg-2 serach-engine-buttons">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary search-display"
          />
        </span>
        <span className="col-lg-2 serach-engine-buttons">
          <input
            type="button"
            value="My location"
            className="my-location-button"
          />
        </span>
      </div>
    </form>
  );

  return (
    <div>
      {form}
      <Header
        name={hero.name}
        country={hero.country}
        temperature={weather.temperature}
        icon={weather.icon}
        description={weather.description}
      />
      <Overview humidity={weather.humidity} wind={weather.wind} />
    </div>
  );
}
