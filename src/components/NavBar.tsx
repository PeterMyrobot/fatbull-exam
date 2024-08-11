'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavIconComponent from '@/components/Icons/NavIcon';

export const tabs = [
  {
    icon: <NavIconComponent />,
    text: 'HOME',
    path: '/search',
    paths: ['/search', '/results'],
  },
  { icon: <NavIconComponent />, text: 'Tags', path: '/tags', paths: ['/tags'] },
];

function NavBar() {
  const pathname = usePathname();

  const isActive = (paths: string[]) => paths.includes(pathname);

  return (
    <div className="relative h-[70px] w-full bg-blackLight sm:h-full sm:w-20">
      <div className="flex h-full w-full sm:h-[88px]">
        <Image
          className="m-auto"
          src="./assets/svgs/logo.svg"
          alt="logo"
          width={35}
          height={15}
        />
      </div>
      <ul className="hidden sm:mt-[7px] sm:block">
        {tabs.map((tab) => (
          <li key={tab.text} className="mb-6 w-full">
            <Link
              href={tab.path}
              className="flex flex-col items-center justify-center"
            >
              <NavIconComponent
                className={`m-auto ${isActive(tab.paths) ? 'text-white' : 'text-gray'}`}
              />

              <span
                className={`text-xs leading-[18px] ${isActive(tab.paths) ? 'text-white' : 'text-blackLight'}`}
              >
                {tab.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
