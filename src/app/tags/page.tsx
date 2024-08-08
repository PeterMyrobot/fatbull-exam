import React from 'react';
import tags from '@/service/api/tags/tags.json';
import Tag from './components/Tag';

function page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-background pt-20">
      <div className="flex flex-col overflow-hidden md:w-[846px]">
        <h1 className="mb-6 w-full text-left text-3xl leading-[45px]">Tags</h1>
        <div className="no-scrollbar flex flex-1 flex-wrap gap-x-6 gap-y-9 overflow-scroll pb-5">
          {tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
