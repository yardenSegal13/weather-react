import WeatherApp from "./WeatherApp";
import Footer from "./Footer";
import "./WeatherApp.css";
function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="weather-app-wrapper">
            <WeatherApp />
            <Footer />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
