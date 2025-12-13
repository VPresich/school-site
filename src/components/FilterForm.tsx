import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { saveSelectedCats, saveDateRange } from '../redux/filter/slice';
import { selectSelectedCats, selectDateRange } from '../redux/filter/selectors';
import { AppDispatch } from '../redux/store';
import DateRangePicker from './DataPicker/DateRangePicker/DateRangePicker';
import MultySelector from './MultySelector/MultySelector';
import { categories } from '../auxiliary/categories';
import { transformCategory } from '../auxiliary/transformCategory';
import { FaCheck } from 'react-icons/fa6';
import { FilterValues } from '../redux/filter/types';

import Separator from './Separator';

const FilterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initDateRange = useSelector(selectDateRange);
  const initSelectedCat = useSelector(selectSelectedCats);

  const { handleSubmit, control } = useForm<FilterValues>({
    defaultValues: {
      dateRange: initDateRange,
      selectedCats: initSelectedCat,
    },
  });

  const onSubmit = (data: FilterValues) => {
    console.log('FILTERINGData:', data);
    dispatch(saveSelectedCats(data.selectedCats));
    dispatch(saveDateRange(data.dateRange));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-4 flex flex-col gap-5"
    >
      <Controller
        name="dateRange"
        control={control}
        render={({ field }) => (
          <DateRangePicker value={field.value} onChange={field.onChange} />
        )}
      />

      <Controller
        name="selectedCats"
        control={control}
        render={({ field }) => (
          <MultySelector
            options={categories}
            selectedOptions={field.value}
            onChange={field.onChange}
            toValue={item => item.value}
            transform={transformCategory}
            CheckIcon={FaCheck}
          />
        )}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#993333] text-white rounded-t-xl hover:bg-[#d66044]"
      >
        Застосувати
      </button>
    </form>
  );
};

export default FilterForm;
