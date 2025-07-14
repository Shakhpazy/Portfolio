import type { Project } from "./data";
import { FaGithub } from "react-icons/fa";

type ProjectItemProps = {
    projectprop: Project;
};

export const ProjectItem = ({ projectprop }: ProjectItemProps) => {
    return (
        <div className="flex flex-wrap lg:!flex-nowrap justify-center items-center gap-10">
            <div className="lg:!w-1/2 w-full lg:!order-1 order-2">
                <img
                    src={projectprop.image}
                    alt={projectprop.name}
                    className="w-full h-auto mb-4"
                />
            </div>
            <div className="lg:!w-1/2 w-full lg:!order-2 order-1">
                <h2 className="text-4xl font-light mb-2 text-center lg:!text-start">{projectprop.name}</h2>
                <p className="text-gray-400 text-lg mb-4 text-center lg:!text-start">{projectprop.description}</p>
                <div className="flex flex-wrap justify-center lg:!justify-start gap-2 mb-4">
                    {projectprop.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-slate-800 rounded-lg hover:scale-110 transition-transform duration-200 text-pink-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center lg:!justify-start">
                    <a
                    href={projectprop.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 border-1 border-pink-600 flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-pink-600 hover:text-white transition-colors duration-200"
                >
                    Code
                    <FaGithub className="" />
                </a>
                </div>
            </div>
        </div>
    );
}

