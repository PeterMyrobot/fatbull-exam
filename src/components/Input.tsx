import React from 'react';

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ value, placeholder, onChange }: InputProps) {
  return (
    <input
      className="border-gray50 bg-black focus:border-orange h-[60px] w-full rounded-md border-[3px] px-4 text-sm outline-none"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

Input.defaultProps = {
  placeholder: 'input',
};

export default Input;
