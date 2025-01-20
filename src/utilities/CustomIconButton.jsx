import PropTypes from "prop-types";
import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

const CustomIconButton = ({
  name,
  url,
  target,
  icon,
  iconClasses,
  btnClasses,
}) => {
  const { theme } = useContext(themeContext);
  const handleClick = () => {
    window.open(url, target);
  };
  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className={`mx-2 rounded-full border-2 border-lightTheme-secondary p-2 sm:p-3 hover:bg-lightTheme-primary dark:border-darkTheme-secondary hover:dark:bg-darkTheme-primary ${btnClasses}`}
    >
      <img
        src={icon}
        alt={name}
        className={`${theme === "dark" ? "" : "invert"} ${iconClasses}`}
      />
    </button>
  );
};

CustomIconButton.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconClasses: PropTypes.string,
  btnClasses: PropTypes.string,
};

export default CustomIconButton;
