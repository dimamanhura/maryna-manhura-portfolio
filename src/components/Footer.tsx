import SocialLinks from "@/components/SocialLinks";
import { Link } from "@nextui-org/react";
import { Social } from "@prisma/client";

interface FooterProps {
  email: string;
  social: Social;
};

const Footer = ({ email, social }: FooterProps) => {
  return (
    <footer className="bg-[#F7F8FF] py-6">
      <div className="container flex justify-between items-center m-auto">
        {email && (
          <Link href={`mailto:${email}`} className="text-base text-gray-400 hover:text-black">{email}</Link>
        )}
        <SocialLinks social={social} />
      </div>
    </footer>
  );
};

export default Footer;