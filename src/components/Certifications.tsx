import { fetchNNGCertifications } from "@/db/queries/nng-certifications";
import NNGCertificationsTable from "./NNGCertificationsTable";

const Certifications = async () => {
  const NNGCertifications = await fetchNNGCertifications();

  return (
    <div className="flex flex-col gap-10 mb-16">
      <h2 className="text-3xl font-medium">Certifications</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-between text-xl font-normal">
          <p>
            I love to always learn something new and improve my knowledge. That's why I started my quest to get certified in <strong>NNG.</strong></p> 
          <p>
            Therefore, I took the first course in the <strong>"Research"</strong> group called: <strong>"Discovery: Building the Right Thing"</strong>
          </p>
          <p>
            In the future, I will continue to go and study other topics.
          </p>
        </div>
        <div>
          <NNGCertificationsTable NNGCertifications={NNGCertifications} />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
