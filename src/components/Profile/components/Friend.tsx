import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { TUser } from '@/service/api/followers/types';

function Friend({ name, username, avater, isFollowing }: TUser) {
  const [imgSrc, setImgSrc] = useState(avater);
  return (
    <div className="flex h-[45px] flex-row items-center">
      <div className="flex flex-1 items-center">
        <Image
          width={40}
          height={40}
          src="/assets/images/default-avatar.png"
          alt="avatar"
          onError={() => {
            setImgSrc('/assets/images/default-avatar.png');
          }}
        />
        <div className="ml-[15px]">
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-sm text-profileGray">{`@${username}`}</p>
        </div>
      </div>
      <Button
        variant={isFollowing ? 'contained' : 'outlined'}
        label={isFollowing ? 'Following' : 'Follow'}
        onClickHandler={() => {}}
      />
    </div>
  );
}

export default Friend;
