import React from "react";
import Board from "./components/board";

export default function snake() {
  return (
    <section>
      <h1>SNAKE</h1>
      <Board rows="10" cols="10" />
    </section>
  );
}
