import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="row justify-content-centre">
            <div className="col-6">
              <div className="row">
                <div className="col-6 align-self-start celsius-fahrenheit">
                  <span href="#" className="celsius-link active">
                    {" "}
                    °C
                  </span>
                  <span id="CFline"> | </span>
                  <span href="#" className="fahrenheit-link">
                    {" "}
                    °F{" "}
                  </span>
                </div>

                <div className="col-6 align-self-end high-and-low">
                  <span className="today-high">H: 14°</span>
                  <span> | </span>
                  <span className="today-low">L: 12°</span>
                </div>
              </div>

              <div className="row">
                <div className="col current-temperature-display">
                  <h1 id="current-temperature-display">13°</h1>
                </div>

                <div className="col weather-icon">
                  <img
                    src="https://openweathermap.org/img/wn/01n@2x.png"
                    alt="night clear sky"
                    className="icon"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col current-city">
                  <h2 className="city">London</h2>
                </div>

                <div className="col weather-word-description">
                  <h2 className="description">Clear sky</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-12 align-self-start">
                  <p className="current-date">
                    Last updated on Friday, 23 April at 18:38
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <form className="search-form">
                <input
                  type="text"
                  placeholder="Enter a location here"
                  id="search-box"
                  autocomplete="off"
                  autofocus="on"
                />
                <button
                  type="sumbit-button"
                  className="btn btn-outline-secondary"
                >
                  <i className="fas fa-search-location"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="my-location-button"
                >
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </form>
              <hr />
              <div className="row">
                <div className="col weather-details">
                  <div className="real-feel">
                    <p>Real feel</p>
                    <span className="degree-real-feel">
                      <p>11°</p>
                    </span>
                  </div>

                  <div className="humidity">
                    <p>Humidity</p>
                    <span className="humidity-level">
                      <p>43%</p>
                    </span>
                  </div>

                  <div className="wind">
                    <p>Wind</p>
                    <span className="wind-speed">
                      <p>7 km/h</p>
                    </span>
                  </div>

                  <hr />

                  <div className="col weather-forecast" id="forecast">
                    <div className="row">
                      <div className="col-4 first-day">
                        <p className="forecast-date">Friday</p>
                      </div>
                      <div className="col-4">
                        <img
                          src="http://openweathermap.org/img/wn/01d@2x.png"
                          alt=""
                          width="40"
                        />
                      </div>
                      <div className="col-4">
                        <span className="temperature-first-day">
                          <p className="forecast-max-temp">15°</p>|
                          <p className="forecast-min-temp">3°</p>
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-4 first-day">
                        <p className="forecast-date">Saturday</p>
                      </div>
                      <div className="col-4">
                        <img
                          src="http://openweathermap.org/img/wn/01d@2x.png"
                          alt=""
                          width="40"
                        />
                      </div>
                      <div className="col-4">
                        <span className="temperature-first-day">
                          <p className="forecast-max-temp">14°</p>|
                          <p className="forecast-min-temp">5°</p>
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-4 first-day">
                        <p className="forecast-date"> Sunday</p>
                      </div>
                      <div className="col-4">
                        <img
                          src="http://openweathermap.org/img/wn/01d@2x.png"
                          alt=""
                          width="40"
                        />
                      </div>
                      <div className="col-4">
                        <span className="temperature-first-day">
                          <p className="forecast-max-temp">13°</p>|
                          <p className="forecast-min-temp">4°</p>
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-4 first-day">
                        <p className="forecast-date">Monday</p>
                      </div>
                      <div className="col-4">
                        <img
                          src="http://openweathermap.org/img/wn/01d@2x.png"
                          alt=""
                          width="40"
                        />
                      </div>
                      <div className="col-4">
                        <span className="temperature-first-day">
                          <p className="forecast-max-temp">13°</p>|
                          <p className="forecast-min-temp">3°</p>
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-4 first-day">
                        <p className="forecast-date">Tuesday</p>
                      </div>
                      <div className="col-4">
                        <img
                          src="http://openweathermap.org/img/wn/01d@2x.png"
                          alt=""
                          width="40"
                        />
                      </div>
                      <div className="col-4">
                        <span className="temperature-first-day">
                          <p className="forecast-max-temp">13°</p>|
                          <p className="forecast-min-temp">4°</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span id="footer">
        This project was coded by <strong>Ramona Gherasim</strong> and is
        <a
          id="githubLink"
          href="https://github.com/RamonaGherasim/dotty-weather-app-react"
          target="_blank"
        >
          <span> open-sourced on GitHub </span>
        </a>
        and hosted on
        <a
          id="netlifyLink"
          href="https://ecstatic-volhard-727bed.netlify.app"
          target="_blank"
        >
          <span> Netlify </span>
        </a>
      </span>
    </div>
  );
}
