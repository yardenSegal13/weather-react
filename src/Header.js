import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1>
        {props.name} {props.country}
      </h1>
      <h2>
        <img src={props.icon} alt="weather-icon" id="icon" />
        <strong id="temp">{props.temperature}</strong>
        <small>
          <a href="/" id="celsius" className="active unit">
            °C
          </a>
          |
          <a href="/" id="fahrenheit" className="unit">
            °F
          </a>
        </small>
      </h2>
      <h3>{props.description}</h3>
    </header>
  );
}
