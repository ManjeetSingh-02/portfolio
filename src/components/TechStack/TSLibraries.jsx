import { techstackLibraries } from "../../libraries/constants";
import TSIHeading from "./TSIHeading";
import TSItems from "./TSItems";

const TSLibraries = () => {
  return (
    <div className="flex flex-col gap-4">
      <TSIHeading name={"Libraries"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Object.keys(techstackLibraries).map((item) => (
          <TSItems
            key={item}
            name={techstackLibraries[item].name}
            url={techstackLibraries[item].url}
            target={techstackLibraries[item].target}
            icon={techstackLibraries[item].icon}
            classes={
              "bg-lightTheme-primary py-4 dark:bg-darkTheme-primary animate-fade-up animate-delay-100"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TSLibraries;
