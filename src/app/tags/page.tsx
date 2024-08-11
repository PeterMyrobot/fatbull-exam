import React from 'react';
import tags from '@/service/api/tags/tags.json';
import Tag from './components/Tag';

function page() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center overflow-hidden bg-background px-5 py-5 sm:h-full sm:pt-20">
      <div className="flex flex-col overflow-hidden md:w-[846px]">
        <h1 className="mb-6 h-[36px] w-full text-left text-2xl sm:text-3xl">
          Tags
        </h1>
        <div className="flex flex-1 flex-wrap gap-x-6 gap-y-9 overflow-scroll pb-5">
          {tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
