import React from 'react';

function Divider({ className }: { className?: string }) {
  return (
    <div className={`my-[10px] w-full border-t border-white/10 ${className}`} />
  );
}

export default Divider;
