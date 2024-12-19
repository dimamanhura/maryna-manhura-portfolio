import { cache } from "react";
import type { Metadata } from "@prisma/client";
import { db } from "@/db";

export const fetchMetadata = cache((): Promise<Metadata | null> => {
  return db.metadata.findFirst();
});
