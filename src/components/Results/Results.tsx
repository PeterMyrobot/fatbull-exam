import React from 'react';
import followers from '@/service/api/followers/followers.json';
import Result from './components/Result';
import Button from '../Button';

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
  handleGoBack: () => void;
  handleChange: () => void;
};

function Results({ handleGoBack, handleChange }: ResultsProps) {
  const onClickHandler = () => {
    handleChange();
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
        {followers.data.map((follower) => (
          <Result
            key={follower.id}
            name={follower.name}
            username={follower.username}
            avater={follower.avater}
          />
        ))}
      </div>
      <div className="flex flex-1 items-end">
        <Button label="MORE" variant="normal" onClickHandler={onClickHandler} />
      </div>
    </div>
  );
}

export default Results;
