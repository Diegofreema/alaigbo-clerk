'use client';

import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import NavLinks from './NavLinks';
import SideBar from './SideBar';
import { UserButton, useUser } from '@clerk/nextjs';
const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <header className="   bg-black  fixed top-0 left-0 right-0 z-30 ">
      <nav className=" flex py-4 pl-3  md:p-8 items-center justify-between w-[98%] sm:w-[90%] mx-auto ">
        <div className="left text-base md:text-3xl">
          <Link className="text-white" href={'/'}>
            Alaigbo
          </Link>
        </div>

        <div className=" space-x-2 flex   items-center">
          <div className="hidden lg:!flex space-x-4 items-center">
            <Link className="text-white " href={'/'}>
              Join The Alaigbo Community
            </Link>
            <Link href={'/'} className="bg-[#00AA00] p-2 rounded-sm text-white">
              INVEST IN ALAIGBO
            </Link>
          </div>
          <SideBar />
          {isSignedIn && <UserButton afterSignOutUrl="/" />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
