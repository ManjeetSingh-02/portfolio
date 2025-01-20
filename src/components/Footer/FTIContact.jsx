import PropTypes from "prop-types";

const FTIContact = ({ devmail }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-sm sm:flex-row sm:text-lg">
      <span className="hidden sm:block">Email:</span>
      <span className="hover:text-lightTheme-accent hover:dark:text-darkTheme-accent">
        <a href={`mailto:${devmail}`}>{devmail}</a>
      </span>
    </div>
  );
};

FTIContact.propTypes = {
  devmail: PropTypes.string.isRequired,
};

export default FTIContact;
