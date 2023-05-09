import React from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

export default function Weather(props) {
  function showTemp(response) {
    alert(`The temperature in ${props.city} is ${response.data.main.temp}`);
  }

  let apiKey = `cf6b50b908fa2e0baca3eed8a569a5f6`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);

  return <InfinitySpin type="puff" width="200" color="pink" />;
}
