import { createRoot } from "react-dom/client";
import { RecipesProvider } from "./context/RecipesContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <RecipesProvider>
    <App />
  </RecipesProvider>,
);
