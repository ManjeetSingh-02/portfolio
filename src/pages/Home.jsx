import HMSpan from "../components/Home/HMSpan";
import HMINSpan from "../components/Home/HMINSpan";
import HMImg from "../components/Home/HMImg";
import { pageDetails } from "../libraries/constants";
import CustomDownloadButton from "../utilities/CustomDownloadButton";
import CustomNavigationButton from "../utilities/CustomNavigationButton";

const Home = () => {
  document.title = pageDetails.home.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", pageDetails.home.description);
  return (
    <section className="mx-auto my-16 flex w-[60%] animate-fade flex-col items-center justify-center gap-8">
      <HMImg />
      <div className="flex flex-col items-center justify-center gap-4">
        <HMSpan
          classes={
            " text-2xl sm:text-4xl text-center font-bold text-lightTheme-accent dark:text-darkTheme-accent"
          }
          text={"Manjeet Singh"}
        />
        <HMSpan
          classes={
            "text-xl sm:text-2xl text-center font-bold text-lightTheme-accent dark:text-darkTheme-accent"
          }
          text={"B.Tech (4th year) - CS"}
        />
        <HMSpan
          classes={"text-sm sm:text-xl text-center w-[90%]"}
          text={
            <>
              Currently pursuing B.Tech from Maharana Pratap Engineering
              College, Kanpur. I am passionate to become a{" "}
              {<HMINSpan text={"Software Developer"} />}. Currently i am
              developing web projects to improve my{" "}
              {<HMINSpan text={"Frontend Development"} />} skills. I am also
              proficient in {<HMINSpan text={"C++"} />} programming language
              along with good {<HMINSpan text={"DSA"} />} and{" "}
              {<HMINSpan text={"Problem-Solving"} />} skills.
            </>
          }
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CustomNavigationButton
            name={"View My " + pageDetails.projects.name}
            path={pageDetails.projects.path}
          />
          <CustomDownloadButton
            name={"View My Resume"}
            url={"../../manjeetsingh_resume.pdf"}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
