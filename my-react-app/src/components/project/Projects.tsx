import { ProjectItem } from "./ProjectItem";
import { projectData } from "./data";

export const Projects = () => {


  return (
    <div className="text-white py-20">
      <div className="container mx-auto">
        <h1 className="text-6xl text-center font-light mb-15">Projects</h1>
        <div className="projects p-5">
            {projectData.map((project, index) => (
              <div className="mb-20" key={index}>
                <ProjectItem key={index} projectprop={project} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}