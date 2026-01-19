import { createContext, useContext, useState } from "react";

const RecipesContext = createContext();

export function useRecipes() {
  const ctx = useContext(RecipesContext);
  if (!ctx) throw new Error("useRecipes must be inside RecipesProvider");
  return ctx;
}

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([
    { id: "1", poster: "poster.jpeg", title: "Пицца римская" },
    { id: "2", poster: "poster.jpeg", title: "Пицца римская 2" },
    { id: "3", poster: "poster.jpeg", title: "Пицца римская 3" },
    { id: "4", poster: "poster.jpeg", title: "Пицца римская 4" },
  ]);
  return <RecipesContext.Provider value={{ recipes, setRecipes }}>{children}</RecipesContext.Provider>;
}
