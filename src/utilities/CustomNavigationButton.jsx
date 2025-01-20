import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CustomNavigationButton = ({ name, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="rounded-lg border-2 border-lightTheme-secondary p-3 hover:bg-lightTheme-primary dark:border-darkTheme-secondary hover:dark:bg-darkTheme-primary"
    >
      {name}
    </button>
  );
};

CustomNavigationButton.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CustomNavigationButton;
