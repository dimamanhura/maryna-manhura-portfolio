'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  definePositionForPreviewImages,
  previewsList,
} from "@/utils/previews";

const ProjectsPreview = () => {
  const [previewCurrentIndex, setPreviewCurrentIndex] = useState(3);
  const { bg, isVertical, alignCenter } = previewsList[previewCurrentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPreviewCurrentIndex((prevValue) => {
        return prevValue !== previewsList.length - 1
          ? prevValue + 1
          : 0;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const renderImage = (index: number) => {
    const sizeCN = isVertical ? 'w-1/2 h-full' : 'w-full h-1/2';
    const positionCN = definePositionForPreviewImages({
      alignCenter,
      isVertical,
      index,
    });

    return (
      <div className={`${sizeCN} ${positionCN} relative`}>
        <Image
          className="object-fit rounded-lg shadow-2xl"
          height={320}
          width={320}
          style={{
            height: isVertical ? "auto" : "100%",
            width: isVertical ? "100%" : "auto",
          }}
          src={`/previews/project_${previewCurrentIndex + 1}_img_${index}.png`}
          alt="avatar"
        />
      </div>
    );
  };

  const positionCN = isVertical ? 'flex-row' : 'flex-col';

  return (
    <div className={`rounded-3xl p-12 w-full h-full flex ${positionCN} gap-8 ${bg}`}>
      {renderImage(1)}
      {renderImage(2)}
    </div>
  );
};

export default ProjectsPreview;
