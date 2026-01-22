import { useState } from "react";
import { useRecipes } from "../../context/RecipesContext";
import RecipesItem from "../RecipesItem/RecipesItem";
import RecipiesItemAdd from "../RecipesItem/RecipiesItemAdd";
import "./RecipesList.scss";

export default () => {
  const { recipes, setRecipes, moveItem, recipesAdd, recipesRemove, changeFavorite } = useRecipes();
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
            onFavorite={() => changeFavorite(index)}
            onMoveUp={() => moveUp(index)}
            onMoveDown={() => moveDown(index)}
            onDelete={() => recipesRemove(index)}
            total={size}
          />
        ))}
        {size < maxSize && <RecipiesItemAdd onClick={recipesAdd} />}
      </div>
    </div>
  );
};
