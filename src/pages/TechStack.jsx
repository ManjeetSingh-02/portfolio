import { pageDetails } from "../libraries/constants";
import TSLanguages from "../components/TechStack/TSLanguages";
import TSLibraries from "../components/TechStack/TSLibraries";
import TSFrameworks from "../components/TechStack/TSFrameworks";
import TSDevTools from "../components/TechStack/TSDevTools";
import TSDatabases from "../components/TechStack/TSDatabases";
import TSOS from "../components/TechStack/TSOS";
import TSDistros from "../components/TechStack/TSDistros";

const TechStack = () => {
  document.title = pageDetails.techstack.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", pageDetails.techstack.description);
  return (
    <section className="mx-auto my-16 flex w-[60%] sm:w-[70%] animate-fade flex-col gap-2 font-bold text-lightTheme-accent dark:text-darkTheme-accent">
      <TSLanguages />
      <TSLibraries />
      <TSFrameworks />
      <TSDevTools />
      <TSDatabases />
      <TSOS />
      <TSDistros />
    </section>
  );
};

export default TechStack;
