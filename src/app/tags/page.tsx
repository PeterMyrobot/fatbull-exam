import React from 'react';
import tags from '@/service/api/tags/tags.json';

function page() {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-20">
      <div className="w-[846px]">
        <h1 className="w-full text-left text-3xl leading-[45px]">Tags</h1>
        <div className="flex flex-wrap gap-x-6 gap-y-9">
          {tags.map((tag) => (
            <div key={tag.id} className="h-[199px] w-[150px]">
              <div className="h-[150px] w-[150px] rounded-lg bg-white/5">
                <div>
                  <span>{tag.name}</span>
                </div>
                <span>{tag.name}</span>
                <span>{tag.count} Result</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
