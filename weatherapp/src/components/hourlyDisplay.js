import React from "react";
import "../App.css";
import { capitalizeFirstLetter, formatDate, formatTime } from "./utils";

export default function hourlyDisplay(hourlyInfo) {
  const data = hourlyInfo.hourlyInfo;
  return (
    <div id="HourlyDisplayContainer">
      <h2 id="HourlyDisplayHeader">Hourly Display</h2>
      <div id="HourlyInnerContainer">
        {data.map((day, index) => (
          <div className="HourContainer" key={index}>
            <div id="HourTime">{formatTime(day.dt)}</div>
            <div id="HourDate">{formatDate(day.dt)}</div>
            <div id="HourDescription">
              {capitalizeFirstLetter(day.weather[0].description)}
            </div>
            <img
              id="HourIcon"
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
