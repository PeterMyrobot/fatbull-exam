'use client';

import Profile from '@/components/Profile/Profile';
import Results from '@/components/Results/Results';
// import SearchFrom from '@/components/SearchFrom';
import React from 'react';

function homePage() {
  return (
    <div className="flex h-full w-full flex-row bg-background">
      <div className="flex-1 px-[130px]">
        {/* <SearchFrom /> */}
        <Results />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default homePage;
