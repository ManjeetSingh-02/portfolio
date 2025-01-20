import PropTypes from "prop-types";

const NVHeading = ({ name }) => {
  return (
    <>
      <span className="font-league text-2xl sm:text-4xl font-bold text-lightTheme-accent dark:text-darkTheme-accent">
        {name}
      </span>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-darkTheme-accent transition-all duration-500 group-hover:w-full dark:bg-lightTheme-accent"></span>
    </>
  );
};

NVHeading.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NVHeading;
