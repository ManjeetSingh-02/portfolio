import PropTypes from "prop-types";

const FTIDev = ({ devname }) => {
  return (
    <div className="flex items-center justify-center gap-1 text-sm flex-row sm:text-lg w-auto">
      <span>Developed by:</span>
      <div className="group relative font-bold">
        <span className="hover:text-lightTheme-accent hover:dark:text-darkTheme-accent">
          {devname}
        </span>
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-darkTheme-accent transition-all duration-300 group-hover:w-full dark:bg-lightTheme-accent"></span>
      </div>
    </div>
  );
};

FTIDev.propTypes = {
  devname: PropTypes.string.isRequired,
};

export default FTIDev;
