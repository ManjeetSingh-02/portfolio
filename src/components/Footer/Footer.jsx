import FTInfo from "./FTInfo";
import CustomIconButton from "../../utilities/CustomIconButton";
import ThemeIconButton from "../../utilities/ThemeIconButton";
import { redirectUrls } from "../../libraries/constants";

const Footer = () => {
  return (
    <footer className="mx-auto mb-3 flex w-[80%] animate-fade-up flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
      <FTInfo />
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
    </footer>
  );
};

export default Footer;
