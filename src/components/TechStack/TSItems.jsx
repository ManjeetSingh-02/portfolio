import PropTypes from "prop-types";
import CustomIconButton from "../../utilities/CustomIconButton";

const TSItems = ({ name, url, target, icon, classes }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl ${classes}`}
    >
      <CustomIconButton
        name={name}
        url={url}
        target={target}
        icon={icon}
        iconClasses={"h-24 w-24"}
        btnClasses={"border-none"}
      />
      <span className="text-sm sm:text-lg">{name}</span>
    </div>
  );
};

TSItems.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

export default TSItems;
