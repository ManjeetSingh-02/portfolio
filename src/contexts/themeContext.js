import { createContext } from "react";

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

export const themeContext = createContext({
  theme: localStorage.getItem("theme") || "light",
  setTheme: () => {},
});
