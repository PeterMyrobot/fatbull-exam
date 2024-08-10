import React from 'react';
import Image from 'next/image';
import { TUser } from '@/service/api/followers/types';

type ResultProps = Omit<TUser, 'id' | 'isFollowing'>;

function Result({ name, username }: ResultProps) {
  // const [imgSrc, setImgSrc] = React.useState(avater);
  return (
    <div>
      <Image
        src="/assets/images/default-avatar.png"
        alt={username}
        width={219}
        height={146}
        // objectFit=""
        className="h-[146px] w-[219px] object-cover"

        // onError={() => {
        //   setImgSrc('');
        // }}
      />

      <h2 className="mt-3 text-[15px]">{name}</h2>
      <h3 className="text-[11px] text-resultsGray">by {username}</h3>
    </div>
  );
}

export default Result;
