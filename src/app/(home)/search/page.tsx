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
    <div className="flex h-full w-full flex-row bg-background px-5 py-5 sm:px-[130px]">
      <SearchFrom onSearch={onSearch} />
    </div>
  );
}

export default Search;
