import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.body.classList = "bg-lightTheme-background text-lightTheme-text";
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList = "bg-darkTheme-background text-darkTheme-text";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
