import React from "react";

export default function WeatherIcon(props) {
  return (
    <img src={props.iconUrl} alt={props.description} width="64" height="64" />
  );
}
