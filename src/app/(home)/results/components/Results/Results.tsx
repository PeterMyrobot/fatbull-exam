import React from 'react';
import { TResult } from '@/service/api/search/types';
import { useLayoutContext } from '@/context/LayoutContextProvider';

import Button from '@/components/Button';
import ArrowIconComponent from '@/components/Icons/Arrow';
import Result from './components/Result';

type ResultsProps = {
  data: TResult[];
  handleGoBack: () => void;
  handleGetNextPage: () => void;
};

function Results({ data, handleGoBack, handleGetNextPage }: ResultsProps) {
  const { isMobile } = useLayoutContext();
  const onClickHandler = () => {
    handleGetNextPage();
    console.log('clicked');
  };
  return (
    <div className="flex w-full flex-col px-5 pt-5 sm:mx-auto sm:w-auto sm:px-[50px] sm:pt-[92px]">
      <div className="relative mb-6 flex items-center">
        {!isMobile && (
          <button
            className="absolute left-[-47px] cursor-pointer p-2"
            onClick={handleGoBack}
            type="button"
            aria-label="goBack"
          >
            <ArrowIconComponent className="" />
          </button>
        )}
        <h1 className="text-3xl leading-[45px] sm:mb-0">Results</h1>
      </div>
      <div className="flex w-full flex-col gap-y-10 overflow-scroll sm:max-w-[725px] sm:flex-1 sm:flex-row sm:flex-wrap sm:gap-x-[34px] sm:gap-y-[30px]">
        {data.map((result) => (
          <Result
            key={result.id}
            name={result.name}
            username={result.username}
            avater={result.avater}
          />
        ))}
        <div className="mb-4 flex flex-1 items-end">
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
