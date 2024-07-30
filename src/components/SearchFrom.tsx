import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import NonLinearSlider from './NonLinearSlider';
import Divider from './Divider';

export type FormValues = {
  keyword: string;
  resultsPerPage: number;
};

function SearchFrom() {
  const { handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      keyword: '',
      resultsPerPage: 12,
    },
  });
  const currentResultsPerPage = watch('resultsPerPage');
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <form className="flex h-full flex-col pb-[84px] pt-[54px]">
      <div className="flex-1">
        <h1 className="mb-5 text-2xl leading-9">Search</h1>
        <Controller
          name="keyword"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <Input value={value} onChange={onChange} placeholder={name} />
          )}
        />
        <Divider />
        <h1 className="text-2xl leading-9"># of results per page</h1>
        <span>{currentResultsPerPage}</span>
        <span>results</span>
        <Controller
          name="resultsPerPage"
          control={control}
          render={({ field: { onChange, value } }) => (
            <NonLinearSlider defaultValue={value} onChange={onChange} />
          )}
        />
        <Divider />
      </div>
      <Button
        label="SEARCH"
        variant="normal"
        onClickHandler={handleSubmit(onSubmit)}
      />
    </form>
  );
}

export default SearchFrom;
