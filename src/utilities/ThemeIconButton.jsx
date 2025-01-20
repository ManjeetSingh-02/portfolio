import LightMode from "../assets/icons/lightmode.svg";
import DarkMode from "../assets/icons/darkmode.svg";
import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

const ThemeIconButton = () => {
  const { theme, setTheme } = useContext(themeContext);
  const getIcon = {
    dark: LightMode,
    light: DarkMode,
  };
  const icon = getIcon[theme];
  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="mx-2 rounded-full border-2 border-lightTheme-secondary p-2 sm:p-3 hover:bg-lightTheme-primary dark:border-darkTheme-secondary hover:dark:bg-darkTheme-primary"
    >
      <img
        src={icon}
        alt={`${icon} Theme Icon`}
        className={theme === "dark" ? "" : "invert"}
      />
    </button>
  );
};

export default ThemeIconButton;
