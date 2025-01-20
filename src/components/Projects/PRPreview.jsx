import PropTypes from "prop-types";

const PRPreview = ({ previewImg }) => {
  return <img src={previewImg} alt="Preview" className="rounded-xl" />;
};

PRPreview.propTypes = {
  previewImg: PropTypes.string.isRequired,
};

export default PRPreview;
