import React from 'react';
import Image from 'next/image';
import { TUser } from '@/service/api/followers/types';

type ResultProps = Omit<TUser, 'id' | 'isFollowing'>;

function Result({ name, username }: ResultProps) {
  // const [imgSrc, setImgSrc] = React.useState(avater);
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/assets/images/default-avatar.png"
        alt={username}
        width={219}
        height={146}
        // objectFit=""
        className="h-[222px] w-full object-cover sm:h-[146px] sm:w-[219px]"

        // onError={() => {
        //   setImgSrc('');
        // }}
      />
      <div className="flex w-full flex-col justify-start">
        <h2 className="mt-3 text-[15px]">{name}</h2>
        <h3 className="text-[11px] text-resultsGray">by {username}</h3>
      </div>
    </div>
  );
}

export default Result;
