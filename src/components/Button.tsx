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
      'bg-black text-white border-white hover:bg-white hover:text-black h-[29px]  rounded-full border text-center leading-3 text-xs font-semibold px-[10px] py-2 ',
    contained:
      'bg-white text-black border-black hover:bg-black hover:text-white hover:border-white h-[29px] leading-3 rounded-full border text-center text-xs font-semibold px-[10px] py-2',
  };

  return (
    <button type="button" className={styles[variant]} onClick={onClickHandler}>
      {label}
    </button>
  );
}

export default Button;
