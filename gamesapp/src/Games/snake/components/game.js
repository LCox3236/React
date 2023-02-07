import React from "react";
import "./game.css";
import { useState } from "react";
export default function Game() {
  const [gameState, setGameState] = useState({
    tickTime: 200,
    rows: 25,
    cols: 25,
    grid: [],
    food: {},
    snake: {
      head: {},
      tail: [],
    },
    currentDirection: "right",
    die: false,
    score: 0,
    scoreFactor: 10,
  });

  const getRandomGrid = () => {
    return {
      row: Math.floor(Math.random() * gameState.rows),
      col: Math.floor(Math.random() * gameState.cols),
    };
  };

  const getCenterOfGrid = () => {
    return {
      row: Math.floor((gameState.rows - 1) / 2),
      col: Math.floor((gameState.cols - 1) / 2),
    };
  };

  function resetGrid(state = {}, sendBack = false) {
    if (!Object.keys(state).length) {
      state = gameState;
    }
    const grid = [];
    const { rows, cols, food, snake } = state;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isFood = food.row === row && food.col === col;
        const isHead = snake.head.row === row && snake.head.col === col;
        let isTail = false;
        snake.tail.forEach((t) => {
          if (t.row === row && t.col === col) {
            isTail = true;
          }
        });

        gameState.grid.push({
          row,
          col,
          isFood,
          isHead,
          isTail,
        });
      }
    }
    if (sendBack) {
      return grid;
    } else {
      setGameState({
        grid,
      });
    }
  }

  function handleKeyPress(e) {
    let { currentDirection } = gameState.currentDirection;

    switch (e.keyCode) {
      case 37:
        currentDirection = "left";
        break;

      case 38:
        currentDirection = "up";
        break;

      case 39:
        currentDirection = "right";

      case 40:
        currentDirection = "up";
        break;
    }

    const newState = {
      ...gameState,
      currentDirection,
    };

    const grid = resetGrid(newState, true);

    setGameState((state) => {
      return { ...newState, grid };
    });

    console.log(gameState);
  }

  function startInteraction() {
    document.addEventListener("keydown", handleKeyPress);

    setGameState((state) => {
      const newState = {
        ...state,
        food: getRandomGrid(),
        snake: {
          head: getCenterOfGrid(),
          // tail: state.snake.tail,
        },
      };
      const grid = resetGrid(newState, true);
      return { ...newState, grid };
    });

    resetGrid();
  }

  function endInteraction() {
    document.removeEventListener("keydown", handleKeyPress);
  }

  const gridItems = gameState.grid.map((grid) => {
    return (
      <div
        key={grid.row.toString() + "-" + grid.col.toString()}
        className={
          grid.isHead
            ? "gridItem is-head"
            : grid.isTail
            ? "gridItem is-tail"
            : grid.isFood
            ? "gridItem is-food"
            : "gridItem"
        }
        style={{
          width: 500 / gameState.cols + "px",
          height: 500 / gameState.rows + "px",
        }}
      ></div>
    );
  });

  startInteraction();

  return (
    <section id="snake-container">
      <div id="snake-grid"> {gridItems} </div>
    </section>
  );
}
