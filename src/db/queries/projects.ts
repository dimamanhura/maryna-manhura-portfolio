import { cache } from "react";
import type { Prisma } from "@prisma/client";
import { db } from "@/db";

export type ProjectWithCompany = Prisma.ProjectGetPayload<{ include: { company: true } }>

export const fetchRecentProjects = cache((): Promise<ProjectWithCompany[]> => {
  return db.project.findMany({
    skip: 0,
    take: 4,
    include: {
      company: true,
    }
  });
});

export const fetchAllProjects = cache((): Promise<ProjectWithCompany[]> => {
  return db.project.findMany({
    include: {
      company: true,
    }
  });
});