"use client";

import LinkIcon from "@/icons/LinkIcon";
import { Button } from "@nextui-org/react";

interface DownloadButtonProps {
  dark?: boolean;
};

const DownloadButton = ({ dark }: DownloadButtonProps) => {
  const resumeFileName = 'CV_Maryna_Manhura_UI_UX_Designer.pdf';
  return (
    <Button
      startContent={<LinkIcon dark={!dark} />}
      className={dark ? "bg-black text-white" : "bg-white text-black"}
      onClick={() => window.open(resumeFileName)}
    >
      CV / Resume
    </Button>
  );
};

export default DownloadButton;