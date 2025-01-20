import PropTypes from "prop-types";

const HMINSpan = ({ text }) => {
  return (
    <span
      className={"font-bold text-lightTheme-accent dark:text-darkTheme-accent"}
    >
      {text}
    </span>
  );
};

HMINSpan.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HMINSpan;
