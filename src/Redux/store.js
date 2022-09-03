import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { filterContacts } from './filter';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterContacts.name]: filterContacts.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
