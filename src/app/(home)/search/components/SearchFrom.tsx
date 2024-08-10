'use client';

import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FormValues } from '@/common/types';

import Input from '@/components/Input';
import Button from '@/components/Button';
import NonLinearSlider from '@/components/NonLinearSlider';
import Divider from '@/components/Divider';

function SearchFrom({ onSearch }: { onSearch: (data: FormValues) => void }) {
  const { handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      keyword: '',
      resultsPerPage: 12,
    },
  });
  const currentResultsPerPage = watch('resultsPerPage');
  const onSubmit: SubmitHandler<FormValues> = (data) => onSearch(data);
  return (
    <form className="flex h-full w-full flex-col pb-[84px] pt-[54px]">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-2xl leading-9">Search</h1>
        <Controller
          name="keyword"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <Input value={value} onChange={onChange} placeholder={name} />
          )}
        />
        <Divider />
        <h1 className="text-2xl leading-9"># of results per page</h1>
        <h1 className="text-5xl font-bold leading-[72px]">
          {currentResultsPerPage}
          <span className="ml-[10px] text-base font-normal leading-4">
            results
          </span>
        </h1>
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
