import { useState } from "react";
import { useRecipes } from "../../context/RecipesContext";
import RecipesItem from "../RecipesItem/RecipesItem";
import "./RecipesList.scss";
import RecipiesItemAdd from "../RecipesItem/RecipiesItemAdd";

export default () => {
  const { recipes, setRecipes, moveItem, recipesAdd } = useRecipes();
  const size = recipes.length;
  const maxSize = 256;
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
        {size < maxSize && <RecipiesItemAdd onClick={recipesAdd} />}
      </div>
    </div>
  );
};
