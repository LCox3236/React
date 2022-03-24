import React from "react";

export default function ModalDisplay(data) {
  const info = data["info"];
  console.log(info);
  return (
    <div id="modalCountryContainer">
      <div id="modalHeaderContainer">
        <h1 id="modalCountryName">{info.name["common"]}</h1>
        <div id="modalFlagsContainer">
          <img id="modalCountryFlag" src={info.flags["png"]} />
          <img id="modalCountryCOA" src={info.coatOfArms["png"]} />
        </div>
      </div>
      <div id="modalAltNamesContainer">
        <div id="modalAltNamesHeading">Alternate Names:</div>
        {info.altSpellings.map((alt) => (
          <div id="modalAltNames">{alt}</div>
        ))}
      </div>
      <div id="modalInfoContainer">
        <div id="modalPopulation">Population: {String(info.population)}</div>
        <div id="modalCapital">Capital City: {info.capital[0]}</div>
        {Object.entries(info.currencies).map((arr) => (
          <div>
            <div id="modalCurrencyContainer">
              <div>{`Currency: ${arr[0]}; Name: ${arr[1].name}; Symbol: ${arr[1].symbol}`}</div>
            </div>
          </div>
        ))}

        <div id="modalCarSide">
          Drives On: {info.car["side"]} side of the road
        </div>
        <div id="modalLandLocked">Landlocked: {String(info.landlocked)}</div>
        <div id="modalIndependent">Independent: {String(info.independent)}</div>
        <div id="modalUNMember">UN Member: {String(info.unMember)}</div>
      </div>
    </div>
  );
}
