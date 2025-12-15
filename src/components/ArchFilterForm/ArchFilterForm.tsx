import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheck } from 'react-icons/fa6';
import { saveSelectedCats, saveDateRange } from '../../redux/filter/slice';
import {
  selectSelectedCats,
  selectDateRange,
} from '../../redux/filter/selectors';
import { AppDispatch } from '../../redux/store';
import DateRangePicker from '../DataPicker/DateRangePicker/DateRangePicker';
import MultySelector from '../MultySelector/MultySelector';
import DDMultySelector from '../MultySelector/DropDownMultySelector';
import { categories } from '../../auxiliary/categories';
import { transformCategory } from '../../auxiliary/transformCategory';
import { feedbackSchema } from './feedbackSchema';
import { FilterValues } from '../../redux/filter/types';
import {
  errNotify,
  successNotify,
} from '../../auxiliary/notification/notification';

const ArchFilterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initDateRange = useSelector(selectDateRange);
  const initSelectedCat = useSelector(selectSelectedCats);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FilterValues>({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      dateRange: initDateRange,
      selectedCats: initSelectedCat,
    },
  });

  const onSubmit = (data: FilterValues) => {
    try {
      dispatch(saveSelectedCats(data.selectedCats));
      dispatch(saveDateRange(data.dateRange));
      successNotify('Filter saved');
    } catch (error) {
      errNotify('Filter not saves');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-4 mt-4 flex gap-3 items-end"
    >
      <Controller
        name="dateRange"
        control={control}
        render={({ field }) => (
          <DateRangePicker
            value={field.value}
            onChange={field.onChange}
            startError={errors.dateRange?.startDate?.message}
            endError={errors.dateRange?.endDate?.message}
            className="flex flex-row gap-2"
          />
        )}
      />
      <Controller
        name="selectedCats"
        control={control}
        render={({ field }) => (
          <DDMultySelector
            options={categories}
            selectedOptions={field.value}
            nameOptions="Категорії"
            onChange={field.onChange}
            toValue={item => item.value}
            transform={transformCategory}
            CheckIcon={FaCheck}
            error={errors?.selectedCats?.message}
          />
        )}
      />
      <div className="flex flex-col">
        <button
          type="submit"
          className="bg-[#993333] text-white rounded-xl py-2.5 px-4 transition-colors hover:bg-[#d66044] cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={Object.keys(errors).length > 0}
        >
          Застосувати
        </button>
        <div className="h-5" />
      </div>
    </form>
  );
};

export default ArchFilterForm;
