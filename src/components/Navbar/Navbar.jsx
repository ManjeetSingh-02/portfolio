import NVLink from "./NVLink";
import NVHeading from "./NVHeading";
import CustomIconButton from "../../utilities/CustomIconButton";
import ThemeIconButton from "../../utilities/ThemeIconButton";
import { pageDetails, redirectUrls } from "../../libraries/constants";

const Navbar = () => {
  return (
    <nav className="mx-auto mt-5 flex w-[80%] animate-fade-down flex-col items-center justify-between gap-8 py-5 lg:flex-row lg:gap-0">
      <div className="group relative">
        <NVHeading name={"Manjeet Singh"} />
      </div>
      <ul className="flex flex-col gap-12 sm:gap-0 sm:flex-row items-center justify-center">
        {Object.keys(pageDetails).map((page) => {
          return (
            <NVLink
              key={page}
              name={pageDetails[page].name}
              path={pageDetails[page].path}
            />
          );
        })}
      </ul>
      <div className="flex items-center justify-center">
        {Object.keys(redirectUrls).map((key) => (
          <CustomIconButton
            key={key}
            name={redirectUrls[key].name}
            url={redirectUrls[key].url}
            target={redirectUrls[key].target}
            icon={redirectUrls[key].icon}
          />
        ))}
        <ThemeIconButton />
      </div>
    </nav>
  );
};

export default Navbar;
