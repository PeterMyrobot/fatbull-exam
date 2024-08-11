'use client';

import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useGetFollower from './hooks/useGetFollower';
import useGetFollowing from './hooks/useGetFollowing';
import Friends from './components/Friends';

function Profile() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ['Followers', 'Following'];

  const { isLoading: isGetFollowerLoading, data: follower } = useGetFollower(
    { page: 1, pageSize: 10 },
    tabs[tabIndex].toLowerCase(),
  );

  const { isLoading: isGetFollowingLoading, data: following } = useGetFollowing(
    { page: 1, pageSize: 10 },
    tabs[tabIndex].toLowerCase(),
  );

  return (
    <div className="hidden h-full w-[375px] bg-blackLight pt-8 2xl:block">
      <Tabs
        className="relative h-full overflow-hidden"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex h-[33px] justify-evenly">
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              className={`flex w-full cursor-pointer justify-center border-b-2 leading-6 outline-none ${index === tabIndex ? 'border-white font-bold' : 'border-profileBorder text-profileGray'} `}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanel selectedClassName="overflow-scroll h-full">
          <Friends friends={follower} isLoading={isGetFollowerLoading} />
        </TabPanel>
        <TabPanel selectedClassName="overflow-scroll h-full">
          <Friends friends={following} isLoading={isGetFollowingLoading} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Profile;
