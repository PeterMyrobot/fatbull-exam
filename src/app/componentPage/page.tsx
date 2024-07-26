'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import NonLinearSlider from '@/components/NonLinearSlider';

export default function Home() {
  const [value, setValue] = useState('');
  const [sliderValue, setSliderValue] = useState(0);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <div>
      Hello
      <Button
        label="Button"
        variant="normal"
        onClickHandler={() => console.log('clicked')}
      />
      <Button
        label="Button"
        variant="outlined"
        onClickHandler={() => console.log('clicked')}
      />
      <Button
        label="Button"
        variant="contained"
        onClickHandler={() => console.log('clicked')}
      />
      <Input value={value} onChange={onInputChange} />
      <div>Slider value: {sliderValue}</div>
      <NonLinearSlider
        defaultValue={sliderValue}
        onChange={(v) => setSliderValue(v)}
      />
    </div>
  );
}
