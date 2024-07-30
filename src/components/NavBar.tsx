'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavIconProps = {
  className?: string;
};

function NavIcon(props: NavIconProps) {
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

function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => path === pathname;

  const tabs = [
    { icon: <NavIcon />, text: 'HOME', path: '/' },
    { icon: <NavIcon />, text: 'Tags', path: '/tags' },
  ];

  return (
    <div className="relative h-full w-20 bg-blackLight">
      <div className="flex h-[88px] w-full">
        <Image
          className="m-auto"
          src="./assets/svgs/logo.svg"
          alt="logo"
          width={35}
          height={15}
        />
      </div>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.text} className="mb-6 w-full">
            <Link
              href={tab.path}
              className="flex flex-col items-center justify-center"
            >
              <NavIcon
                className={`m-auto ${isActive(tab.path) ? 'text-white' : 'text-gray'}`}
              />

              <span
                className={`text-xs leading-[18px] ${isActive(tab.path) ? 'text-white' : 'text-blackLight'}`}
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
