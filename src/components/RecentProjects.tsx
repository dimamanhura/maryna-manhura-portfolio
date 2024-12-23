import Link from "next/link";
import { Button } from "@nextui-org/react";
import { fetchRecentProjects } from "@/db/queries/projects";
import ProjectCard from "@/components/ProjectCard";
import { defineProjectCardBG } from "@/utils/custom-styles";
import LinkIcon from "@/icons/LinkIcon";

const RecentProjects = async () => {
  const recentProjects = await fetchRecentProjects();

  return (
    <div className="flex flex-col gap-10 mb-16">
      <h2 className="text-3xl font-medium">Recent projects</h2>
      <div className="grid grid-cols-2 gap-12">
        {recentProjects.map((project, index) => (
          <ProjectCard
            bgClassName={defineProjectCardBG(index)}
            project={project}
            key={project.id}
          />
        ))}
      </div>
      <div>
        <Button
          startContent={<LinkIcon />}
          className="bg-black text-white"
          href="/portfolio"
          as={Link}
        >
          Show portfolio
        </Button>
      </div>
    </div>
  );
};

export default RecentProjects;

