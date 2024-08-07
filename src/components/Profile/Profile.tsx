import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import followers from '@/service/api/followers/followers.json';
import following from '@/service/api/followers/following.json';
import Friends from './components/Friends';

function Profile() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    {
      title: 'Followers',
    },
    {
      title: 'Following',
    },
  ];
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
              key={tab.title}
              className={`flex w-full cursor-pointer justify-center border-b-2 leading-6 outline-none ${index === tabIndex ? 'border-white font-bold' : 'border-profileBorder text-profileGray'} `}
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>

        <TabPanel selectedClassName="overflow-scroll h-full">
          <Friends friends={followers.data} />
        </TabPanel>
        <TabPanel selectedClassName="overflow-scroll h-full">
          <Friends friends={following.data} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Profile;
