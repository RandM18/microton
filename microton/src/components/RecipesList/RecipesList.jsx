import { useState } from "react";
import { useRecipes } from "../../context/RecipesContext";
import RecipesItem from "../RecipesItem/RecipesItem";
import "./RecipesList.scss";

function moveItem(arr, from, to) {
  if (to < 0 || to >= arr.length || from === to) return arr;
  const next = arr.slice();
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export default () => {
  const { recipes, setRecipes } = useRecipes();
  const size = recipes.length;
  const moveUp = (index) => {
    setRecipes((prev) => moveItem(prev, index, index - 1));
  };

  const moveDown = (index) => {
    setRecipes((prev) => moveItem(prev, index, index + 1));
  };
  return (
    <div className='recipesList'>
      <div className='recipesList__inner container'>
        {recipes.map((item, index) => (
          <RecipesItem
            key={item.id}
            {...item}
            index={index}
            onMoveUp={() => moveUp(index)}
            onMoveDown={() => moveDown(index)}
            total={size}
          />
        ))}
      </div>
    </div>
  );
};
