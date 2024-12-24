import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

const AboutImageAndText = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mb-16">
      <div className="relative w-full h-full">
        <Image
          className="object-cover rounded-2xl"
          fill
          src="/avatar.png"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col text-xl gap-7">
        <p>
          Hello there! My name is Maryna Manhura.In the past, my last name was Hovorova, I changed it after the wedding, so don't be surprised.
        </p>
        <p>
          My main focus is building product that meets both company and customer needs. I really love and enjoy working on solving those types of problems; big, hairy problems that require lots of research, prototyping, and testing but ultimately lead to a solution that is useful, meaningful, and relevant.
        </p>
        <p>
          I am currently engaged in designing a large-scale analytical platform with a complex UX architecture tailored for the Oil & Gas industry. I have successfully designed and overseen the development of over 10 applications featuring intricate data visualizations, starting from the ground up. My work has included conducting user research and testing, collaborating with multiple product teams, and establishing efficient communication and workflows.
        </p>
        <div>
          <DownloadButton dark />
        </div>
      </div>
    </div>
  );
};

export default AboutImageAndText;

