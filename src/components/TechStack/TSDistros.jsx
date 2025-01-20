import { techstackDistro } from "../../libraries/constants";
import TSIHeading from "./TSIHeading";
import TSItems from "./TSItems";

const TSDistros = () => {
  return (
    <div className="flex flex-col gap-4">
      <TSIHeading name={"Distros"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Object.keys(techstackDistro).map((item) => (
          <TSItems
            key={item}
            name={techstackDistro[item].name}
            url={techstackDistro[item].url}
            target={techstackDistro[item].target}
            icon={techstackDistro[item].icon}
            classes={
              "bg-lightTheme-primary py-4 dark:bg-darkTheme-primary animate-fade-up animate-delay-100"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TSDistros;
