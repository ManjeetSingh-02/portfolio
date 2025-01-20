import PropTypes from "prop-types";

const HMSpan = ({ text, classes }) => {
  return <span className={classes}>{text}</span>;
};

HMSpan.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  classes: PropTypes.string.isRequired,
};

export default HMSpan;
