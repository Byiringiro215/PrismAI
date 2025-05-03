import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSidebar } from '../Providers/Provider';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const navbarlinks = [
  { label: 'Features', id: '#Transform' },
  { label: 'How it works', id: '#HowPrismWorks' },
  { label: 'Testimonials', id: '#Testimonies' },
  { label: 'Pricing', id: '#Transportation' },
  { label: 'Login', id: '#' },
  { label: 'SignUp', id: '#' }
];

const Sidebar = () => {
  const { showSidebar, toogleSidebar } = useSidebar();

  return (
    <div
      className={clsx(
        'absolute md:hidden px-3 py-5 bg-blue-950/30 backdrop-blur-lg w-[15rem] h-full gap-[1rem] transition-transform duration-300 z-50',
        {
          'translate-x-0': showSidebar,
          '-translate-x-full': !showSidebar,
        }
      )}
    >
      <button onClick={toogleSidebar}>
        <XMarkIcon className="h-[30px] w-[30px] ml-[12rem] cursor-pointer text-white hover:bg-gray-700 rounded-full" />
      </button>

      {navbarlinks.map((link, index) => {
        if (link.label === 'Login') {
          return (
            <div
              key={index}
              className="bg-blue-700/40 rounded-md h-[3rem] px-4 py-3 cursor-pointer hover:text-blue-500 my-5"
            >
              <button
                className="text-white hover:text-green-300"
                onClick={() => setShowLogin(true)}
              >
                {link.label}
              </button>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="bg-blue-700/40 rounded-md h-[3rem] px-4 py-3 cursor-pointer hover:text-blue-500 my-5"
          >
            <Link to={link.id} className="text-white hover:text-green-300">
              {link.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
