'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialLinks from "@/components/SocialLinks";
import Logo from '@/icons/Logo';
import { Social } from '@prisma/client';

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'My Portfolio',
    href: '/portfolio',
  },
  {
    title: 'About me',
    href: '/about',
  },
];

interface NavbarProps {
  social: Social;
};

const Navbar = ({ social }: NavbarProps) => {
  const pathname = usePathname();

  const renderLinks = () => {
    return links.map(link => {
      const isActive = pathname === link.href;
      return (
        <li key={link.href} className='relative'>
          <Link href={link.href} className={`px-1 ${isActive ? 'text-black font-semibold' : 'text-gray-400'} hover:text-black`}>
            {link.title}
          </Link>
          {isActive && (
            <div className='w-full absolute h-[1px] bg-black bottom-[-4px]' />
          )}
        </li>
      );
    });
  };

  return (
    <nav className="container flex justify-between items-center m-auto h-20">
      <Link href={'/'}>
        <Logo />
      </Link>

      <div className='flex gap-4 items-center'>
        <ul className='flex gap-4 items-center'>
          {renderLinks()}
        </ul>
        <SocialLinks social={social} />
      </div>
    </nav>
  );
};

export default Navbar;