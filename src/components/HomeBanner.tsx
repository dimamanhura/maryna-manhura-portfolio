import { fetchMetadata } from "@/db/queries/metadata";
import DownloadButton from "@/components/DownloadButton";
import ProjectsPreview from "@/components/ProjectsPreview";

const HomeBanner = async () => {
  const metadata = await fetchMetadata();

  return (
    <div className="grid grid-cols-2 mb-16 h-[calc(100vh-100px)]">
      {metadata && (
        <div className="pr-16 flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-5xl">Hey,</h2>
            <h2 className="text-5xl">I'm {metadata.firstName}</h2>
            <h2 className="text-5xl">{metadata.lastName}</h2>
          </div>
          <p className="text-2xl">{metadata.description}</p>
          <div>
            <DownloadButton dark />
          </div>
        </div>
      )}
      <ProjectsPreview />
    </div>
  );
};

export default HomeBanner;
