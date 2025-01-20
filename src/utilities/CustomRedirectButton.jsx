import PropTypes from "prop-types";

const CustomRedirectButton = ({ name, url, target }) => {
  const handleClick = () => {
    window.open(url, target);
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="text-sm sm:text-base rounded-lg border-2 border-lightTheme-secondary p-3 hover:bg-lightTheme-primary dark:border-darkTheme-secondary hover:dark:bg-darkTheme-primary"
    >
      {name}
    </button>
  );
};

CustomRedirectButton.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default CustomRedirectButton;
