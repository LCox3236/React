import React from "react";
import "../App.css";
import { capitalizeFirstLetter, formatDate, formatTime } from "./utils";

export default function dailyDisplay(dailyInfo) {
  const data = dailyInfo.dailyInfo;
  console.log(data);
  return (
    <div id="DailyDisplayContainer">
      <h2 id="DailyDisplayHeader">Daily Display</h2>
      <div id="DayInnerContainer">
        {data.map((day, index) => (
          <div className="DayContainer" key={index}>
            <div id="DayDate">{formatDate(day.dt)}</div>
            <div id="DayDescription">
              {capitalizeFirstLetter(day.weather[0].description)}
            </div>
            <img
              id="DayIcon"
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
