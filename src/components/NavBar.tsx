'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavIconProps = {
  className?: string;
};

export function NavIcon(props: NavIconProps) {
  const { className = '' } = props;
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.341 0a1.5 1.5 0 000 3h10.417v9.423a1.5 1.5 0 003 0V2.5a2.5 2.5 0 00-2.5-2.5H6.34zM2 4.915h11.122a2 2 0 012 2v11.122a2 2 0 01-2 2H2a2 2 0 01-2-2V6.915a2 2 0 012-2z"
      />
    </svg>
  );
}
export const tabs = [
  {
    icon: <NavIcon />,
    text: 'HOME',
    path: '/search',
    paths: ['/search', '/results'],
  },
  { icon: <NavIcon />, text: 'Tags', path: '/tags', paths: ['/tags'] },
];

function NavBar() {
  const pathname = usePathname();

  const isActive = (paths: string[]) => paths.includes(pathname);

  return (
    <div className="relative h-[70px] w-full bg-blackLight sm:h-full sm:w-20">
      <div className="flex h-full w-full sm:h-[88px]">
        <Image
          className="ml-[21px] sm:m-auto"
          src="./assets/svgs/logo.svg"
          alt="logo"
          width={35}
          height={15}
        />
      </div>
      <ul className="hidden sm:block">
        {tabs.map((tab) => (
          <li key={tab.text} className="mb-6 w-full">
            <Link
              href={tab.path}
              className="flex flex-col items-center justify-center"
            >
              <NavIcon
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
