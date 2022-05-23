import React from "react";
import "../App.css";
import DailyDisplay from "./dailyDisplay";
import HourlyDisplay from "./hourlyDisplay";
import { formatDate, formatTime } from "./utils";

export default function weatherDataDisplay(recData) {
  const data = recData.data;
  console.log(data);

  //console.log(new Date(data.current.dt * 1000));
  return (
    <>
      <h1 id="MainHeader">Weather Data</h1>
      <div id="MainContainer">
        <div id="DateDisplay">
          current date:{" "}
          {formatDate(data.current.dt) + " -- " + formatTime(data.current.dt)}
        </div>
        <div id="TempDisplay">
          current temperature: {data.current.temp}&#8451;
        </div>
        <div id="FeelsLikeDisplay">Feels Like: {data.current.temp}&#8451;</div>
        <div id="CurrentWeather">
          Current Weather: {data.current.weather[0].description} &#8451;
        </div>
        <img
          id="CurrentWeatherIcon"
          src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
        />
      </div>
      <HourlyDisplay hourlyInfo={data.hourly} />
      <DailyDisplay dailyInfo={data.daily} />
    </>
  );
}
