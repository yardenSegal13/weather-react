import React from "react";

export default function Overview(props) {
  return (
    <div className="row">
      <div className="col-6">
        <ul>
          <li id="date"></li>
          <li id="time"></li>
        </ul>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{props.wind} </span>Km/H
          </li>
        </ul>
      </div>
    </div>
  );
}
