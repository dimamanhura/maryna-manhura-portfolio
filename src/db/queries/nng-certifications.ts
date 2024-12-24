import { cache } from "react";
import type { NNGCertification } from "@prisma/client";
import { db } from "@/db";

export const fetchNNGCertifications = cache((): Promise<NNGCertification[]> => {
  return db.nNGCertification.findMany();
});
