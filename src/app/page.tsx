'use client';

import Profile from '@/components/Profile/Profile';
import SearchFrom from '@/components/SearchFrom';
import React from 'react';

function homePage() {
  return (
    <div className="bg-background flex h-full w-full flex-row">
      <div className="flex-1 px-[130px]">
        <SearchFrom />
      </div>
      <Profile />
    </div>
  );
}

export default homePage;
