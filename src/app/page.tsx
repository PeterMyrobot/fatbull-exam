'use client';

import Button from '@/components/Button';

export default function Home() {
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
    </div>
  );
}
