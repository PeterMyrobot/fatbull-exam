import React from 'react';

interface ButtonProps {
  label: string;
  variant: 'normal' | 'outlined' | 'contained';
  onClickHandler: () => void;
}

function Button({ label, variant, onClickHandler }: ButtonProps) {
  const styles = {
    normal:
      'bg-white text-black border-white hover:bg-black hover:text-white h-10 w-[335px] rounded border text-center text-sm font-bold',
    outlined:
      'bg-black text-white border-white hover:bg-white hover:text-black h-[29px] w-[60px] rounded-full border text-center text-xs font-semibold',
    contained:
      'bg-white text-black border-black hover:bg-black hover:text-white hover:border-white h-[29px] w-[60px] rounded-full border text-center text-xs font-semibold',
  };

  return (
    <button type="button" className={styles[variant]} onClick={onClickHandler}>
      {label}
    </button>
  );
}

export default Button;
