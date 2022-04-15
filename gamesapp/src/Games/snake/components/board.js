import React from "react";

export default function board({ rows, cols }) {
  const styles = {
    snakeContainer: {
      width: "100vw",
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    snakeGrid: {
      width: "500px",
      height: "500px",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    gridItem: {
      outline: "1px solid grey",
      width: 500 / rows,
      height: 500 / cols,
    },
    isFood: {
      "background-color": "red",
      outline: "1px solid grey",
      width: 500 / rows,
      height: 500 / cols,
    },
  };

  let grid = [];

  const getRandomGrid = () => {
    return {
      row: Math.floor(Math.random() * rows),
      col: Math.floor(Math.random() * cols),
    };
  };

  let food = getRandomGrid();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isFood = food.row === row && food.col === col;
      grid.push({
        row,
        col,
        isFood,
      });
      //grid.push({ row, col });
    }
  }

  const gridItems = grid.map((grid) => {
    return (
      <div
        key={grid.row.toString() + "-" + grid.col.toString()}
        style={grid.isFood ? styles.isFood : styles.gridItem}
      ></div>
    );
  });

  return (
    <section id="snake-container" style={styles.snakeContainer}>
      <div id="snake-grid" style={styles.snakeGrid}>
        {" "}
        {gridItems}{" "}
      </div>
    </section>
  );
}
