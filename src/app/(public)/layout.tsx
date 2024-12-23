import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

interface PublicPagesLayoutProps {
  children: React.ReactNode;
};

const PublicPagesLayout = async ({ children }: Readonly<PublicPagesLayoutProps>) => {
  const session = await auth();

  if (session?.user?.id) {
    return redirect('/');
  }

  return (
    <>
      {children}
    </>
  );
};

export default PublicPagesLayout;
