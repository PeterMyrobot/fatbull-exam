import React from 'react';
import { TResult } from '@/service/api/search/types';

import Button from '@/components/Button';
import Arrow from '@/components/Icons/arrowIcon';
import Result from './components/Result';

type ResultsProps = {
  data: TResult[];
  handleGoBack: () => void;
  handleGetNextPage: () => void;
};

function Results({ data, handleGoBack, handleGetNextPage }: ResultsProps) {
  const onClickHandler = () => {
    handleGetNextPage();
    console.log('clicked');
  };
  return (
    <div className="mx-auto flex h-full flex-col sm:px-[50px] sm:pt-[92px]">
      <div className="relative flex items-center">
        <button
          className="absolute left-[-47px] cursor-pointer p-2"
          onClick={handleGoBack}
          type="button"
          aria-label="goBack"
        >
          <Arrow className="" />
        </button>
        <h1 className="text-3xl leading-[45px]">Results</h1>
      </div>
      <div className="no-scrollbar flex flex-col overflow-scroll sm:h-4/5 sm:max-w-[725px] sm:flex-row sm:flex-wrap sm:gap-x-[34px] sm:gap-y-[30px]">
        {data.map((result) => (
          <Result
            key={result.id}
            name={result.name}
            username={result.username}
            avater={result.avater}
          />
        ))}
        <div className="flex flex-1 items-end">
          <Button
            label="MORE"
            variant="normal"
            onClickHandler={onClickHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
