import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import ModalDisplay from "./components/ModalDisplay.js";

const axios = require("axios");
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function App() {
  const [currentRegion, setCurrentRegion] = useState("europe");
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const setModalOpenTrue = () => {
    setShowModal(true);
  };

  const setModalOpenFalse = () => {
    setShowModal(false);
  };

  const getCountries = () => {
    let search = axios
      .get(`https://restcountries.com/v3.1/region/${currentRegion}`)
      .then((res) => {
        setCountries(res["data"]);
      });
  };

  const changeRegion = (region) => {
    setCurrentRegion(region);
  };

  const updateInfo = async (country) => {
    let search = await axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => {
        setCountryInfo(res["data"][0]);
      });
  };

  useEffect(() => {
    getCountries();
    // console.log(countries);
  }, [currentRegion]);

  useEffect(() => {
    if (countryInfo.length === 0) return;
    // console.log(countryInfo);
    setShowModal(true);
  }, [countryInfo]);

  return (
    <div className="App">
      <header id="header">
        {regions.map((region) => (
          <div>
            <div
              style={{ cursor: "pointer" }}
              className="headerSelectRegion"
              onClick={() => changeRegion(region)}
            >
              {region}
            </div>
          </div>
        ))}
      </header>
      <div id="displayCountriesContainer">
        {countries.map((country) => (
          <div style={{ cursor: "pointer" }} id="countryContainer">
            <img
              className="countryFlag"
              src={country.flags["png"]}
              title={country.name["common"]}
              alt="flag"
              onClick={() => updateInfo(country.name["common"])}
            />
            <div
              className="countryName"
              onClick={() => updateInfo(country.name["common"])}
            >
              {country.name["common"]}
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {},
          content: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "60%",
            width: "50%",
          },
        }}
      >
        <button id="modalCloseButton" onClick={setModalOpenFalse}>
          x
        </button>
        <ModalDisplay info={countryInfo} />
      </Modal>
    </div>
  );
}

export default App;
