import { useState } from "react";
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
  const [recipesList, setRecipesList] = useState([
    { id: "1", poster: "poster.jpeg", title: "Пицца римская" },
    { id: "2", poster: "poster.jpeg", title: "Пицца римская 2" },
    { id: "3", poster: "poster.jpeg", title: "Пицца римская 3" },
    { id: "4", poster: "poster.jpeg", title: "Пицца римская 4" },
  ]);
  const moveUp = (index) => {
    setRecipesList((prev) => moveItem(prev, index, index - 1));
  };

  const moveDown = (index) => {
    setRecipesList((prev) => moveItem(prev, index, index + 1));
  };
  return (
    <div className='recipesList'>
      <div className='recipesList__inner container'>
        {recipesList.map((item, index) => (
          <RecipesItem
            key={item.id}
            {...item}
            index={index}
            onMoveUp={() => moveUp(index)}
            onMoveDown={() => moveDown(index)}
            total={recipesList.length}
          />
        ))}
      </div>
    </div>
  );
};
