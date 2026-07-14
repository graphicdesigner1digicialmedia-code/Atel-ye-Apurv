import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

import Hero from "./ProjectDetails/Hero";
import ProjectInfo from "./ProjectDetails/ProjectInfo";

export default function ProjectDetails() {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl">Project Not Found</h1>
            </div>
        );
    }

    return (
        <>
            <Hero project={project} />
            <ProjectInfo project={project} />
        </>
    );
}