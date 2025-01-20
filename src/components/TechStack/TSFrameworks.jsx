import { techstackFrameworks } from "../../libraries/constants";
import TSIHeading from "./TSIHeading";
import TSItems from "./TSItems";

const TSFrameworks = () => {
  return (
    <div className="flex flex-col gap-4">
      <TSIHeading name={"Frameworks"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Object.keys(techstackFrameworks).map((item) => (
          <TSItems
            key={item}
            name={techstackFrameworks[item].name}
            url={techstackFrameworks[item].url}
            target={techstackFrameworks[item].target}
            icon={techstackFrameworks[item].icon}
            classes={
              "bg-lightTheme-primary py-4 dark:bg-darkTheme-primary animate-fade-up animate-delay-100"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TSFrameworks;
