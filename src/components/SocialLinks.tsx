import LinkedinIcon from '@/icons/LinkedinIcon';
import DribbbleIcon from '@/icons/DribbbleIcon';
import BehanceIcon from '@/icons/BehanceIcon';
import SocialLink from "@/components/SocialLink";
import { Social } from "@prisma/client";

interface SocialLinksProps {
  social: Social;
}

const SocialLinks = ({ social }: SocialLinksProps) => {
  return (
    <div className="flex gap-4">
      {social.linkedin && (
        <SocialLink href={social.linkedin}>
          <LinkedinIcon />
        </SocialLink>
      )}

      {social.dribbble && (
        <SocialLink href={social.dribbble}>
          <DribbbleIcon />
        </SocialLink>
      )}

      {social.behance && (
        <SocialLink href={social.behance}>
          <BehanceIcon />
        </SocialLink>
      )}
    </div>
  );
};

export default SocialLinks;
