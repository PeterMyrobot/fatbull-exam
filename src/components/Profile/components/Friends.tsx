import React from 'react';
import { TUser } from '@/service/api/followers/types';
import Friend from './Friend';

function Friends({
  friends,
  isLoading,
}: {
  friends: { data: TUser[] };
  isLoading: boolean;
}) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-4 px-4 py-8">
      {friends.data.map((friend) => (
        <Friend
          id={friend.id}
          key={friend.id}
          name={friend.name}
          username={friend.username}
          avater={friend.avater}
          isFollowing={friend.isFollowing}
        />
      ))}
    </div>
  );
}

export default Friends;
