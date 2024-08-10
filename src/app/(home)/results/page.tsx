'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Results from './components/Results/Results';

function ResultsPage() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex h-full w-full flex-row bg-background px-[130px]">
      <Results handleChange={() => {}} handleGoBack={handleGoBack} />
    </div>
  );
}

export default ResultsPage;
