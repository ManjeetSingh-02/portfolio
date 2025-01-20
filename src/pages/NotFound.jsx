import DownArrow from "../assets/icons/downarrow.svg";
import { notFoundPageDetails } from "../libraries/constants";
import CustomNavigationButton from "../utilities/CustomNavigationButton";
import { themeContext } from "../contexts/themeContext";
import { useContext } from "react";

const NotFound = () => {
  document.title = notFoundPageDetails.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", notFoundPageDetails.description);
  const { theme } = useContext(themeContext);
  return (
    <div className="mx-auto my-32 flex w-[70%] flex-col items-center justify-center gap-10 text-center">
      <span className="text-2xl xl:text-6xl 2xl:text-8xl">
        Invalid URL 404 - Not Found
      </span>
      <span className="text-2xl xl:text-6xl 2xl:text-8xl">
        Click below to go back
      </span>
      <span className="animate-bounce text-6xl text-lightTheme-accent dark:text-darkTheme-accent xl:text-4xl">
        <img
          src={DownArrow}
          alt="Down Arrow Icon"
          className={`h-12 w-12 xl:h-24 xl:w-24 ${theme === "dark" ? "" : "invert"}`}
        />
      </span>
      <CustomNavigationButton name="Back to Home Page" path="/" />
    </div>
  );
};

export default NotFound;
