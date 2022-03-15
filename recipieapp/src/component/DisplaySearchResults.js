import React from "react";

export default function DisplaySearchResults({ recipe, IDSearch }) {
  function handleSelect() {
    IDSearch(recipe.id);
  }

  return (
    <div
      className="recipe"
      style={{ cursor: "pointer" }}
      onClick={handleSelect}
    >
      <img src={recipe.image} style={{ width: "120px", height: "100px" }} />
      <div className="recipeNameContainer">
        <div className="recipeName">{recipe.title}</div>
      </div>
    </div>
  );
}
