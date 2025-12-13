import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DateRangePicker from './DataPicker/DateRangePicker/DateRangePicker';
import MultySelector from './MultySelector/MultySelector';
import { categories } from '../auxiliary/categories';
import { transformCategory } from '../auxiliary/transformCategory';
import { FaCheck } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
// import { setSelectedCategories, setDateRange } from '../../redux/filterSlice';
import Separator from './Separator';

interface FilterFormValues {
  dateRange: { startDate: Date | null; endDate: Date | null };
  categories: string[];
}

const FilterForm: React.FC = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm<FilterFormValues>({
    defaultValues: {
      dateRange: { startDate: null, endDate: null },
      categories: ['concert', 'exam'],
    },
  });

  // Функция, которая вызывается по кнопке "Применить"
  const onSubmit = (data: FilterFormValues) => {
    // Здесь можно отправить данные в store или на сервер
    // dispatch(setDateRange(data.dateRange));
    // dispatch(setSelectedCategories(data.categories));

    console.log('Отправляем на сервер:', data);
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
        name="categories"
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
        Применить
      </button>
    </form>
  );
};

export default FilterForm;
