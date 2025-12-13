import * as Yup from 'yup';

export const feedbackSchema = Yup.object({
  dateRange: Yup.object({
    startDate: Yup.date().nullable().defined(),

    endDate: Yup.date()
      .nullable()
      .defined()
      .min(Yup.ref('startDate'), 'End date cannot be earlier than start date'),
  }).required(),

  selectedCats: Yup.array()
    .of(Yup.string().defined())
    .required()
    .min(1, 'Select at least one category'),
});
