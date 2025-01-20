import PropTypes from "prop-types";

const CustomDownloadButton = ({ name, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
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

CustomDownloadButton.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CustomDownloadButton;
