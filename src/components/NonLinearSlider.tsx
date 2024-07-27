/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ReactSlider from 'react-slider';

interface NonLinearSliderProps {
  defaultValue: number;
  onChange: (value: number) => void;
}

// 3, 6, 9, 12, 15, 50
const valueMapper: { [key: number]: number } = {
  0: 3,
  124: 6,
  248: 9,
  372: 12,
  487: 15,
  647: 50,
};

const defaultValueMapper: { [key: number]: number } = {
  3: 0,
  6: 124,
  9: 248,
  12: 372,
  15: 487,
  50: 647,
};

function NonLinearSlider({ defaultValue, onChange }: NonLinearSliderProps) {
  const [value, setValue] = useState(defaultValueMapper[defaultValue]);

  const marks = [0, 124, 248, 372, 372 + 115, 372 + 115 + 160];
  // snap to the nearest mark
  const snapToMark = (curValue: number) => {
    const snapTo = marks.reduce((prev, curr) =>
      Math.abs(curr - curValue) < Math.abs(prev - curValue) ? curr : prev,
    );
    setValue(snapTo);
    return snapTo;
  };

  const handleOnChange = (v: number) => {
    const curValue = snapToMark(v);
    onChange(valueMapper[curValue]);
  };

  return (
    <div className="h-[52px] w-full">
      <ReactSlider
        className="w-full"
        max={372 + 115 + 160}
        min={0}
        value={value}
        onChange={handleOnChange}
        renderTrack={(props, state) => (
          <div
            {...props}
            key={state.index}
            className={`p mt-[6px] h-2 cursor-pointer ${
              state.index === 0
                ? 'rounded-e-full rounded-s-full bg-gradient-to-r from-[#FF5C01] to-[#FFD25F]'
                : 'rounded-e-full bg-white/50'
            } `}
          />
        )}
        renderThumb={(props, state) => (
          <div
            {...props}
            key={state.index}
            className="box-content h-[14px] w-[14px] translate-y-[-4px] cursor-pointer rounded-full border-[6px] border-[#FFD05D] bg-blackLight outline-none"
          />
        )}
        marks={marks}
        renderMark={(props) => (
          <div
            {...props}
            key={props.key}
            className={`top-[28px] flex h-full translate-x-[8px] cursor-pointer flex-col items-center text-base font-medium opacity-50 hover:opacity-100 ${props.key !== value ? 'opacity-50' : 'opacity-100'}`}
          >
            {valueMapper[Number(props.key)]}
          </div>
        )}
      />
    </div>
  );
}

export default NonLinearSlider;
