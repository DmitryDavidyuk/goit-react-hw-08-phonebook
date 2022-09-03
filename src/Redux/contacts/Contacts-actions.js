import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest'
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess'
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const toggleCompletedRequest = createAction(
  'contacts/toggleCompletedRequest'
);
export const toggleCompletedSuccess = createAction(
  'contacts/toggleCompletedSuccess'
);
export const toggleCompletedError = createAction(
  'contacts/toggleCompletedError'
);

export const changeFilter = createAction('contacts/changeFilter');
