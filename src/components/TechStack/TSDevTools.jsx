import { techstackDevelopmentTools } from "../../libraries/constants";
import TSIHeading from "./TSIHeading";
import TSItems from "./TSItems";

const TSDevTools = () => {
  return (
    <div className="flex flex-col gap-4">
      <TSIHeading name={"Development Tools"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Object.keys(techstackDevelopmentTools).map((item) => (
          <TSItems
            key={item}
            name={techstackDevelopmentTools[item].name}
            url={techstackDevelopmentTools[item].url}
            target={techstackDevelopmentTools[item].target}
            icon={techstackDevelopmentTools[item].icon}
            classes={
              "bg-lightTheme-primary py-4 dark:bg-darkTheme-primary animate-fade-up animate-delay-100"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TSDevTools;
