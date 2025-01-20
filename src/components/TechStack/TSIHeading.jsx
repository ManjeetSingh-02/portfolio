import PropTypes from "prop-types";

const TSIHeading = ({ name }) => {
  return <span className="text-center sm:text-start text-xl font-normal text-darkTheme-accent dark:text-lightTheme-accent">{name}</span>;
};

PropTypes.TSIHeading = {
  name: PropTypes.string.isRequired,
};

export default TSIHeading;
