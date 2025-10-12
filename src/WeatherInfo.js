import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.deta.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.deta.date}></FormattedDate>
        </li>
        <li className="text-capitalize">{props.deta.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.deta.icon_url} alt="cloudy" />

          <span className="temperature">
            {Math.round(props.deta.temperature)}
          </span>
          <span className="Unit">˚C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.deta.humidity}%</li>
            <li>Wind: {props.deta.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
