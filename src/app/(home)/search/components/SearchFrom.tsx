'use client';

import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FormValues } from '@/common/types';
import { useLayoutContext } from '@/context/LayoutContextProvider';

import Input from '@/components/Input';
import Button from '@/components/Button';
import NonLinearSlider from '@/components/NonLinearSlider';
import Divider from '@/components/Divider';

function SearchFrom({ onSearch }: { onSearch: (data: FormValues) => void }) {
  const { isMobile } = useLayoutContext();
  const { handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues: {
      keyword: '',
      pageSize: 12,
    },
  });
  const currentResultsPerPage = watch('pageSize');
  const onSubmit: SubmitHandler<FormValues> = (data) => onSearch(data);
  return (
    <form className="flex h-full w-full flex-col">
      <div className="flex flex-1 flex-col sm:gap-5">
        <h1 className="mb-4 text-2xl leading-9 sm:mb-0">Search</h1>
        <Controller
          name="keyword"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <Input value={value} onChange={onChange} placeholder={name} />
          )}
        />
        {!isMobile && <Divider />}
        <h1 className="mb-4 mt-7 text-2xl leading-9 sm:mb-0 sm:mt-0">
          # of results per page
        </h1>
        <h1 className="mb-4 h-[50px] text-5xl font-bold sm:mb-0">
          {currentResultsPerPage}
          <span className="ml-[10px] text-base font-normal leading-4">
            results
          </span>
        </h1>
        <Controller
          name="pageSize"
          control={control}
          render={({ field: { onChange, value } }) => (
            <NonLinearSlider defaultValue={value} onChange={onChange} />
          )}
        />
        {!isMobile && <Divider />}
      </div>

      {isMobile && <Divider className="mb-20" />}
      <Button
        label="SEARCH"
        variant="normal"
        onClickHandler={handleSubmit(onSubmit)}
      />
    </form>
  );
}

export default SearchFrom;
