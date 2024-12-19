import { Link } from "@nextui-org/react";

interface SocialLinkProps {
  children: React.ReactElement;
  href: string;
}

const SocialLink = ({ children, href }: SocialLinkProps) => {
  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
};

export default SocialLink;
