import Project from "../components/Projects/Project";
import { pageDetails, projects } from "../libraries/constants";

const Projects = () => {
  document.title = pageDetails.projects.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", pageDetails.projects.description);
  return (
    <section className="mx-auto my-16 grid w-[70%] grid-cols-1 gap-4 lg:grid-cols-2">
      {Object.keys(projects).map((project) => {
        return (
          <Project
            key={project}
            name={projects[project].name}
            description={projects[project].description}
            githubUrl={projects[project].githubUrl}
            websiteUrl={projects[project].websiteUrl}
            previewImg={projects[project].previewImg}
          />
        );
      })}
    </section>
  );
};

export default Projects;
