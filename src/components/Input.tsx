import React from 'react';

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ value, placeholder, onChange }: InputProps) {
  return (
    <input
      className="h-[60px] w-full rounded-md border-[3px] border-white/50 bg-background px-4 text-sm outline-none focus:border-orange"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
