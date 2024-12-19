import { fetchAllProjects } from "@/db/queries/projects";
import ProjectCard from "@/components/ProjectCard";
import { defineProjectCardBG } from "@/utils/custom-styles";

const Projects = async () => {
  const recentProjects = await fetchAllProjects();
  return (
    <div className="flex flex-col gap-10 mb-16">
      <h2 className="text-3xl font-medium">Projects</h2>
      <div className="grid grid-cols-2 gap-12">
        {recentProjects.map((project, index) => (
          <ProjectCard
            bgClassName={defineProjectCardBG(index)}
            project={project}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

