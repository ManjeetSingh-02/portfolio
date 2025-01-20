import { techstackOS } from "../../libraries/constants";
import TSIHeading from "./TSIHeading";
import TSItems from "./TSItems";

const TSOS = () => {
  return (
    <div className="flex flex-col gap-4">
      <TSIHeading name={"Operating Systems"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Object.keys(techstackOS).map((item) => (
          <TSItems
            key={item}
            name={techstackOS[item].name}
            url={techstackOS[item].url}
            target={techstackOS[item].target}
            icon={techstackOS[item].icon}
            classes={
              "bg-lightTheme-primary py-4 dark:bg-darkTheme-primary animate-fade-up animate-delay-100"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TSOS;
