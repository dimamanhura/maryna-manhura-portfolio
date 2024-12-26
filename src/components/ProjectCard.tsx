import { ProjectWithCompany } from "@/db/queries/projects";
import { definePeriodRange } from "@/utils/dates";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  bgClassName: string;
  project: ProjectWithCompany;
};

const ProjectCard = ({ project, bgClassName }: ProjectCardProps) => {
  return (
    <Link
      className={`flex flex-col gap-6 px-10 py-12 rounded-xl ${bgClassName} hover:shadow-xl`}
      href={`/projects/${project.id}`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="h-6 w-1/2 relative flex justify-start">
          <Image
            className="object-contain object-left"
            fill
            src={`${project.company.logoColor}`}
            alt={project.company.name}
          />
        </div>
        
        <div className="text-xs text-gray-400 p-1 rounded border border-gray-400">
          {definePeriodRange(project.startAt, project.endAt)}
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-2xl font-medium mb-6">
            {project.name}
          </h4>
          <p className="text-sm">
            {project.description}
          </p>
        </div>
        <div className="h-full max-h-40 relative flex justify-end items-center">
          <Image
            className="object-fit rounded shadow-2xl"
            height={320}
            width={320}
            style={{
              height: "100%",
              width: "auto",
            }}
            src={`${project.image}`}
            alt={project.name}
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
