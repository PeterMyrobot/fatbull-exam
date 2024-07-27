'use client';

import Profile from '@/components/Profile/Profile';
import SearchFrom from '@/components/SearchFrom';
import React from 'react';

function homePage() {
  return (
    <div className="flex h-full w-full flex-row bg-background">
      <div className="flex-1 px-[130px] pb-[84px] pt-[54px]">
        <SearchFrom />
      </div>
      <Profile />
    </div>
  );
}

export default homePage;
