import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NVLink = ({ name, path }) => {
  return (
    <li className="mx-3">
      <NavLink
        className={({ isActive }) =>
          `rounded-md border-2 border-lightTheme-secondary p-3 hover:bg-lightTheme-primary dark:border-darkTheme-secondary hover:dark:bg-darkTheme-primary ${isActive ? "bg-lightTheme-primary dark:bg-darkTheme-primary" : ""}`
        }
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
};

NVLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NVLink;
