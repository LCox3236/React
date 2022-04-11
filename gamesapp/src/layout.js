import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function layout() {
  return (
    <div>
      <nav id="navBar">
        <li>
          <Link to="/" className="navPageButton">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/snake" className="navPageButton">
            SNAKE
          </Link>
        </li>
        <li>
          <Link to="/ticTacToe" className="navPageButton">
            TicTacToe
          </Link>
        </li>

        <li>
          <Link to="/twoZeroFourEight" className="navPageButton">
            TwoZeroFourEight
          </Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}
