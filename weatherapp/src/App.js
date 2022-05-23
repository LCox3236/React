import "./App.css";
import React, { useEffect, useState, Component } from "react";
import exData from "./temp.json";
import WeatherDataDisplay from "./components/weatherDataDisplay";
const axios = require("axios");

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const LAT = "50.15";
  const LON = "-5.07";

  const fetchData = async (lat, lon) => {
    const URL = `http://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&units=metric&appid=2edf85a03b9eb58423a65fa198cb5018`;
    try {
      const res = await axios.get(URL);
      setData(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
    //console.log(`api response ${JSON.stringify(data)}`);
    //console.log(`from log ${JSON.stringify(exData)}`);
  }, []);

  return (
    <div className="App">
      {loading ? <div>Loading</div> : <WeatherDataDisplay data={data} />}
    </div>
  );
}

export default App;
