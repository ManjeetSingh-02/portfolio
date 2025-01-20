import PropTypes from "prop-types";
import PRInfo from "./PRInfo";
import PRPreview from "./PRPreview";

const Project = ({ name, description, githubUrl, previewImg, websiteUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-lightTheme-secondary p-4 dark:border-darkTheme-secondary animate-fade">
      <PRPreview previewImg={previewImg} />
      <PRInfo
        name={name}
        description={description}
        githubUrl={githubUrl}
        websiteUrl={websiteUrl}
      />
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

export default Project;
