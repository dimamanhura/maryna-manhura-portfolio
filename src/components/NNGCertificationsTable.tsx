"use client";

import {
  TableColumn,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  Progress,
  Table,
} from "@nextui-org/react";
import { NNGCertification } from "@prisma/client";

interface NNGCertificationsTableProps {
  NNGCertifications: NNGCertification[];
};

const NNGCertificationsTable = ({ NNGCertifications }: NNGCertificationsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableColumn>
          Optional Specialty Credits
        </TableColumn>
        <TableColumn>
          {' '}
        </TableColumn>
        <TableColumn>
          {' '}
        </TableColumn>
      </TableHeader>
      <TableBody className="text-xl">
        {NNGCertifications.map(certification => (
          <TableRow key={certification.id}>
            <TableCell className="py-4">
              {certification.group}:
            </TableCell>
            <TableCell className="py-4 w-48">
              <Progress
                className="w-48"
                radius="none"
                value={(certification.progress / certification.courses) * 100}
                size="md"
              />
            </TableCell>
            <TableCell className="py-4">
              {certification.courses - certification.progress} course(s) needed
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NNGCertificationsTable;
