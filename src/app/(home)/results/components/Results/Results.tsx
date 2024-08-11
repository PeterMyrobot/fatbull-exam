import React from 'react';
import { TResult } from '@/service/api/search/types';

import Button from '@/components/Button';
import Result from './components/Result';

type ArrowProps = {
  className?: string;
};

function Arrow(props: ArrowProps) {
  const { className = '' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      fill="none"
      className={className}
    >
      <path
        fill="#fff"
        d="M13.27 2.103 11.333.167.5 11l10.833 10.833 1.937-1.937L4.374 11l8.896-8.897Z"
      />
    </svg>
  );
}

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
    <div className="flex h-full flex-col pt-[92px]">
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
      <div className="no-scrollbar flex h-4/5 w-[725px] flex-wrap gap-x-[34px] gap-y-[30px] overflow-scroll">
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
