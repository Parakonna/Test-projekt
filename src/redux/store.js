import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
