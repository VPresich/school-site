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
import { categories } from '../../auxiliary/categories';
import { transformCategory } from '../../auxiliary/transformCategory';
import { feedbackSchema } from './feedbackSchema';
import { FilterValues } from '../../redux/filter/types';
import { errNotify, successNotify } from '../../auxiliary/notification';

interface FilterFormProps {
  onClose: () => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onClose }) => {
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
      onClose();
    } catch (error) {
      errNotify('Filter not saves');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4 flex flex-col px-2">
      <Controller
        name="dateRange"
        control={control}
        render={({ field }) => (
          <>
            <DateRangePicker
              value={field.value}
              onChange={field.onChange}
              startError={errors.dateRange?.startDate?.message}
              endError={errors.dateRange?.endDate?.message}
            />
          </>
        )}
      />
      <Controller
        name="selectedCats"
        control={control}
        render={({ field }) => (
          <MultySelector
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

      <button
        type="submit"
        className={`px-4 py-2 rounded-xl text-white bg-[#993333] hover:bg-[#d66044] transition-colors cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400`}
        disabled={Object.keys(errors).length > 0}
      >
        Застосувати
      </button>
    </form>
  );
};

export default FilterForm;
