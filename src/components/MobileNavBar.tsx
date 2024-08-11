'use client';

import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import NavIcon from '@/components/Icons/NavIcon';
import Arrow from '@/components/Icons/arrowIcon';
import { tabs } from './NavBar';

function MobileNavBar({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();

  const inSearchPage = pathname === '/search';

  const handleGoBack = () => {
    router.back();
  };

  const isActive = (path: string) => path === pathname;
  return (
    <div className="flex h-full w-full flex-col bg-blackLight">
      <div className="flex h-[70px] w-full">
        {inSearchPage ? (
          <Image
            className="ml-[21px]"
            src="./assets/svgs/logo.svg"
            alt="logo"
            width={35}
            height={15}
          />
        ) : (
          <button
            className="flex cursor-pointer items-center pl-[19px]"
            onClick={handleGoBack}
            type="button"
            aria-label="goBack"
          >
            <div className="ml-[13px] flex h-[26px] w-[26px] items-center justify-center">
              <Arrow />
            </div>
            <h1 className="text-3xl leading-[45px]">Home page</h1>
          </button>
        )}
      </div>
      {children}
      {inSearchPage && (
        <ul className="m-auto flex h-[66px] w-[98px] items-center justify-between">
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
      )}
    </div>
  );
}

export default MobileNavBar;
