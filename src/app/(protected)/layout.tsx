import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { fetchMetadata } from "@/db/queries/metadata";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

interface ProtectedPagesLayoutProps {
  children: React.ReactNode;
};

const ProtectedPagesLayout = async ({ children }: Readonly<ProtectedPagesLayoutProps>) => {
  const metadata = await fetchMetadata();
  const session = await auth();

  if (!session?.user?.id) {
    return redirect('/password');
  }

  return (
    <>
      {metadata && (
        <Navbar social={metadata.social} />
      )}
      <div className="container m-auto">
        {children}
      </div>
      {metadata && (
        <Footer email={metadata.email} social={metadata.social} />
      )}
    </>
  );
};

export default ProtectedPagesLayout;
