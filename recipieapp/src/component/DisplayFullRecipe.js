import React from "react";

export default function DisplayFullRecipe(obj) {
  let recipe = obj.recipe;
  // console.log(recipe.recipe.instructions)
  return (
    <article>
      <section id="fullRecipeHeader">{recipe.title}</section>
    </article>
  );
}
