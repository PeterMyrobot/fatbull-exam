'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TGetSearchResponse, TResult } from '@/service/api/search/types';
import useGetSearchMutation from './hooks/useGetSearchMutation';

import Results from './components/Results/Results';

function ResultsPage() {
  const router = useRouter();
  const hasInitFetch = useRef(false);
  const searchParams = useSearchParams();
  const [params, setParams] = useState({
    keyword: searchParams.get('keyword') || '',
    pageSize: Number(searchParams.get('pageSize')) || 10,
    page: Number(searchParams.get('page')) || 1,
  });

  const [results, setResults] = useState<TResult[]>([]);

  const handleGoBack = () => {
    router.back();
  };

  const getSearchOnSuccess = (data: TGetSearchResponse) => {
    console.log(data);
    setResults((prev) => [...prev, ...data.data]);
  };
  const getSearchOnError = (error: any) => {
    console.error(error);
  };

  const { mutate } = useGetSearchMutation(getSearchOnSuccess, getSearchOnError);

  const handleGetNextPage = () => {
    setParams((prev) => ({ ...prev, page: prev.page + 1 }));
    mutate(params);
  };

  useEffect(() => {
    if (!hasInitFetch.current) {
      mutate(params);
      hasInitFetch.current = true;
    }
    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  }, [params, mutate]); // Empty dependency array ensures this runs only once

  // if (isPending) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex h-full w-full flex-row bg-background px-[130px]">
      <Results
        data={results}
        handleGetNextPage={handleGetNextPage}
        handleGoBack={handleGoBack}
      />
    </div>
  );
}

export default ResultsPage;
