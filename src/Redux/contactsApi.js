import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://630b6b40ed18e82516530a20.mockapi.io/',
  }),
  tagTypes: 'Contact',
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts/`,
      providesTags: ['Contact'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: ({ phone, name }) => ({
        url: '/contacts/',
        method: 'POST',
        body: { phone, name },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactMutation,
} = contactsApi;
