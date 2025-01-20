import { techstackDatabases } from "../../libraries/constants";
import TSIHeading from "./TSIHeading";
import TSItems from "./TSItems";

const TSDatabases = () => {
  return (
    <div className="flex flex-col gap-4">
      <TSIHeading name={"Databases"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Object.keys(techstackDatabases).map((item) => (
          <TSItems
            key={item}
            name={techstackDatabases[item].name}
            url={techstackDatabases[item].url}
            target={techstackDatabases[item].target}
            icon={techstackDatabases[item].icon}
            classes={
              "bg-lightTheme-primary py-4 dark:bg-darkTheme-primary animate-fade-up animate-delay-100"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TSDatabases;
