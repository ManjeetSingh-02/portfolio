import PropTypes from "prop-types";

const TSIHeading = ({ name }) => {
  return (
    <span className="text-center text-xl font-bold text-darkTheme-accent dark:text-lightTheme-accent sm:text-start">
      {name}
    </span>
  );
};

TSIHeading.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TSIHeading;
