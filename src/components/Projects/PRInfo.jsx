import PropTypes from "prop-types";
import CustomRedirectButton from "../../utilities/CustomRedirectButton";

const PRInfo = ({ name, description, websiteUrl, githubUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <span className="text-sm font-bold text-lightTheme-accent dark:text-darkTheme-accent sm:text-2xl">
        {name}
      </span>
      <span className="text-sm sm:text-xl">{description}</span>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
        <CustomRedirectButton
          name={"View Website"}
          url={websiteUrl}
          target={"_blank"}
        />
        <CustomRedirectButton
          name={"GitHub Repository"}
          url={githubUrl}
          target={"_blank"}
        />
      </div>
    </div>
  );
};

PRInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};

export default PRInfo;
