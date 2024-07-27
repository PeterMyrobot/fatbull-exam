import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import NonLinearSlider from './NonLinearSlider';

export type FormValues = {
  keyword: string;
  resultsPerPage: number;
};

function SearchFrom() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      keyword: '',
      resultsPerPage: 12,
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <div>
      <form>
        <h1 className="text-2xl leading-9">Search</h1>
        <Controller
          name="keyword"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <Input value={value} onChange={onChange} placeholder={name} />
          )}
        />
        <Controller
          name="resultsPerPage"
          control={control}
          render={({ field: { onChange, value } }) => (
            <NonLinearSlider defaultValue={value} onChange={onChange} />
          )}
        />
        <Button
          label="SEARCH"
          variant="normal"
          onClickHandler={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  );
}

export default SearchFrom;
