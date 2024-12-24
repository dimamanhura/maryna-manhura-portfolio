'use client';

import { Carousel } from "@heathmont/moon-core-tw";
import Image from "next/image";

const certificates = [
  'ux-design-middle',
  'ux-design-beginning',
  'mobile-apps-design-beginning',
  'figma-auto-layout-workshop',
  'data-tables-in-figma-workshop',
  'smart-interface-patterns-course',
];

const Certificates = () => {
  return (
    <div className="flex flex-col w-full items-center mb-16">
      <Carousel
        autoSlideDelay={3000}
        step={1}
        data-testid="autoSlide-carousel"
        className="w-full sm:max-w-auto"
      >
        <Carousel.Reel className="gap-6">
          {certificates.map((certificate, index) => (
            <Carousel.Item
              className="w-fit h-80 relative"
              data-testid={`carousel-${index}`}
              key={index}
            >
              <Image
                className="object-cover rounded-2xl"
                height={320}
                width={320}
                style={{ height: "100%", width: "auto" }}
                src={`/certificates/${certificate}.png`}
                alt="avatar"
              />
            </Carousel.Item>
          ))}
        </Carousel.Reel>
      </Carousel>
    </div>
  );
};

export default Certificates;

