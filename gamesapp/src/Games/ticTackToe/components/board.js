import React from "react";
import Tile from "./tile";

export default function board({ tiles, onClick }) {
  const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  };

  return (
    <div style={style}>
      {tiles.map((tile, index) => (
        <Tile key={index} value={tile} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}
