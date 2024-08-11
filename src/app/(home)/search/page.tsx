'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FormValues } from '@/common/types';

import SearchFrom from './components/SearchFrom';

function Search() {
  const router = useRouter();
  const onSearch = (data: FormValues) => {
    const params = new URLSearchParams(
      data as unknown as Record<string, string>,
    );
    router.push(`/results?${params.toString()}`);
  };
  return (
    <div className="flex w-full flex-1 flex-row bg-background px-5 pb-6 pt-0 sm:h-full sm:px-[130px] sm:pb-[84px] sm:pt-[54px]">
      <SearchFrom onSearch={onSearch} />
    </div>
  );
}

export default Search;
