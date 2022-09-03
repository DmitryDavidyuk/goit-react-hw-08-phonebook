import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterContacts = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const getFilterContacts = state => state.filter.value;
export const { setFilter } = filterContacts.actions;
export default filterContacts.reducer;
