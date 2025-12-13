export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface FilterValues {
  dateRange: DateRange;
  selectedCats: string[];
}

export interface FilterState extends FilterValues {}
