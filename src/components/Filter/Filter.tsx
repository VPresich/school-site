import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DateRangePicker from '../DataPicker/DateRangePicker/DateRangePicker';
import { FaCheck } from 'react-icons/fa6';
import MultySelector from '../MultySelector/MultySelector';
import { transformCategory } from '../../auxiliary/transformCategory';
import { categories } from '../../auxiliary/categories';
import Separator from '../Separator';
import { RootState } from '../../redux/store';
// import { setSelectedCategories } from '../../redux/filterSlice';

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface CategoryItem {
  title: string;
  value: string;
}

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  // Берем выбранные категории из store
  //   const selectedCats = useSelector(
  //     (state: RootState) => state.filter.selectedCategories
  //   );
  const selectedCats: string[] = [];

  const dateChangeHandle = ({ startDate, endDate }: DateRange) => {
    console.log('START:', startDate);
    console.log('END:', endDate);
  };

  const selectedHandle = (newSelected: string[]) => {
    // dispatch(setSelectedCategories(newSelected));
    console.log('Selected categories:', newSelected);
  };

  return (
    <div className="mb-4 flex flex-col gap-5">
      <Separator />
      <DateRangePicker
        value={{ startDate: null, endDate: null }}
        onChange={dateChangeHandle}
      />
      <Separator />
      <div className="flex flex-col gap-4">
        <MultySelector<CategoryItem>
          options={categories}
          selectedOptions={['concert', 'exam']}
          onChange={selectedHandle}
          toValue={item => item.value}
          transform={transformCategory}
          CheckIcon={FaCheck}
        />
      </div>
    </div>
  );
};

export default Filter;
