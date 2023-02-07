import React from "react";
import Game from "./components/game";

export default function snake() {
  return (
    <section>
      <h1>SNAKE</h1>
      <Game rows="20" cols="20" />
    </section>
  );
}
