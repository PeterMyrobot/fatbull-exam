import React from 'react';
import { TTag } from '@/service/api/tags/types';

function Tag({ tag }: { tag: TTag }) {
  const { name, count } = tag;
  return (
    <div className="h-[199px] w-[150px]">
      <div className="relative h-[150px] w-[150px] rounded-lg bg-white/5">
        <div className="absolute bottom-[14px] left-[10px] max-w-[127px] truncate text-nowrap rounded-lg border-4 border-white px-[14px] font-bold leading-9">
          {name}
        </div>
      </div>
      <div className="mt-[10px] flex h-[39px] flex-col">
        <p className="truncate text-nowrap text-[15px] text-base">{name}</p>
        <p className="text-[11px] text-resultsGray">{count} Questions</p>
      </div>
    </div>
  );
}

export default Tag;
