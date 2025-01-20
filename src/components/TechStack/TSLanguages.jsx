import { techstackLanguages } from "../../libraries/constants";
import TSIHeading from "./TSIHeading";
import TSItems from "./TSItems";

const TSLanguages = () => {
  return (
    <div className="flex flex-col gap-4">
      <TSIHeading name={"Languages"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {Object.keys(techstackLanguages).map((item) => (
          <TSItems
            key={item}
            name={techstackLanguages[item].name}
            url={techstackLanguages[item].url}
            target={techstackLanguages[item].target}
            icon={techstackLanguages[item].icon}
            classes={
              "bg-lightTheme-primary py-4 dark:bg-darkTheme-primary animate-fade-up animate-delay-100"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TSLanguages;
