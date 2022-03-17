import React from "react";

export default function DisplayFullRecipe(obj) {
  let recipe = obj.recipe;
  if (recipe.length < 1) {
    return <div></div>;
  }

  return (
    <article>
      <section id="fullRecipeHeaderContainer">
        <h1 id="fullRecipeHeader">{recipe.title}</h1>
        <div id="fullRecipeHeaderTime">{`Time to make: ${recipe.readyInMinutes} minutes`}</div>
        <div id="fullRecipeHeaderServings">{`Serves: ${recipe.servings}`}</div>
      </section>
      <section id="fullRecipeContainer">
        <section id="fullRecipeIngredientsContainer">
          <h2 id="fullRecipeIngredientsHeader">Ingredients</h2>
          {recipe.extendedIngredients.map((ingredient) => (
            <li class="fullRecipeIngredient">{ingredient.original}</li>
          ))}
        </section>

        <section id="fullRecipeInstructionsContainer">
          <h2 id="fullRecipeInstructionsHeader">Instructions</h2>
          {recipe.analyzedInstructions[0]["steps"].map((instruction) => (
            <li class="fullRecipeInstruction">{instruction.step}</li>
          ))}
        </section>
      </section>
      <section>
        <img id="fullRecipeImg" src={recipe.image} />
      </section>
    </article>
  );
}
