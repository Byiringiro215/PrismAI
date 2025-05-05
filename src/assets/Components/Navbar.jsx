import React from 'react';
import Logo from './Logo';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavbarButtons from './Buttons/StartFreeTrialbtn';
import { useSidebar } from '../Providers/Provider';

export const navbarlinks = [
  { label: 'Features', id: '#Transform' },
  { label: 'How it works', id: '#HowPrismWorks' },
  { label: 'Testimonials', id: '#Testimonies' },
  { label: 'Pricing', id: '#Transportation' },
];

const Navbar = () => {
  const { toogleSidebar } = useSidebar();

  return (
    <div className="fixed w-full flex items-center justify-between  py-3 px-[4rem] h-[5rem] z-20 shadow-xl  bg-gray-800/50 ">
      <Logo />
      <div className="hidden lg:flex gap-7">
        {navbarlinks.map((link, index) => (
          <a
            href={link.id}
            key={index}
            className="text-gray-300 font-bold hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
      <NavbarButtons/>
      <Bars3Icon
        className="block lg:hidden text-white w-[30px] h-[30px] cursor-pointer"
        onClick={toogleSidebar}
      />
    </div>
  );
};

export default Navbar;
