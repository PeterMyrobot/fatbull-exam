'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tabs, NavIcon } from './NavBar';

function MobileNavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => path === pathname;
  return (
    <div className="h-[66px] w-full bg-blackLight sm:hidden">
      <ul className="m-auto flex h-full w-[98px] items-center justify-between">
        {tabs.map((tab) => (
          <li
            key={tab.text}
            className="w-6items-center flex h-6 justify-center"
          >
            <Link href={tab.path}>
              <NavIcon
                className={`m-auto ${isActive(tab.path) ? 'text-white' : 'text-gray'}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavBar;
