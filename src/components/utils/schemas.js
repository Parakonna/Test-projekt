import * as Yup from 'yup';

export const searchSchema = Yup.object({
  searchTerm: Yup.string()
    .required('Search term is required')
    .min(2, 'Search term must be at least 2 characters'),
});
