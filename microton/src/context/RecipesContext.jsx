import { createContext, useContext, useState } from "react";

const RecipesContext = createContext();

export function useRecipes() {
  const ctx = useContext(RecipesContext);
  if (!ctx) throw new Error("useRecipes must be inside RecipesProvider");
  return ctx;
}

function moveItem(arr, from, to) {
  if (to < 0 || to >= arr.length || from === to) return arr;
  const next = arr.slice();
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function RecipesProvider({ children }) {
  // t50 m10  s155 c110 v10  m20  s20  c210 v20  m30  s30  c310 v30  m40  s40  c410 v40  k161iвптэ
  const tableData = {
    rt: "50",
    m1: "10",
    s1: "10",
    c1: "70",
    v1: "80",
    m2: "15",
    s2: "20",
    c2: "25",
    v2: "55",
    m3: "16",
    s3: "30",
    c3: "40",
    v3: "86",
    m4: "18",
    s4: "40",
    c4: "45",
    v4: "90",
  };
  const [recipes, setRecipes] = useState([
    { id: "1", poster: "poster.jpeg", title: "Пицца римская", data: tableData, favorite: 1 },
    { id: "2", poster: "poster.jpeg", title: "Пицца римская 2", data: tableData, favorite: 0 },
    { id: "3", poster: "poster.jpeg", title: "Пицца римская 3", data: tableData, favorite: 1 },
    { id: "4", poster: "poster.jpeg", title: "Пицца римская 4", data: tableData, favorite: 0 },
  ]);

  const recipesAdd = () => {
    setRecipes([
      ...recipes,
      {
        id: "4",
        poster: "poster.jpeg",
        title: "Пицца римская 4",
        data: tableData,
      },
    ]);
  };
  const recipesRemove = (idx) => {
    if (confirm("Вы уверены, что хотите удалить рецепт?")) {
      setRecipes(recipes.filter((recipe, index) => index !== idx));
    }
  };
  const changeFavorite = (ind) => {
    setRecipes(recipes.map((recipe, index) => (index === ind ? { ...recipe, favorite: recipe.favorite === 1 ? 0 : 1 } : recipe)));
  };
  return <RecipesContext.Provider value={{ recipes, setRecipes, moveItem, recipesAdd, recipesRemove, changeFavorite }}>{children}</RecipesContext.Provider>;
}
