import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";

export default function WeatherApp() {
  return (
    <body>
      <div className="weather-app">
        <Form />

        <div className="weather-forecast" id="weather-forecast"></div>
      </div>
    </body>
  );
}
