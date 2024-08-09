'use client';

import React, { useState } from 'react';
import _ from 'lodash';

import Profile from '@/components/Profile/Profile';
import Results from '@/components/Results/Results';
import SearchFrom from '@/components/SearchFrom';
import { FormValues } from '@/common/types';

function HomePage() {
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (data: FormValues) => {
    setSearchParams(data);
  };

  const clearSearchParams = () => {
    setSearchParams({});
  };

  return (
    <div className="flex h-full w-full flex-row bg-background">
      <div className="flex-1 px-[130px]">
        {_.isEmpty(searchParams) ? (
          <SearchFrom onSearch={handleSearch} />
        ) : (
          <Results handleGoBack={clearSearchParams} handleChange={() => {}} />
        )}
      </div>
      <Profile />
    </div>
  );
}

export default HomePage;
