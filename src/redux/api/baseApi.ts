// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mongoose-assignment3-server.vercel.app/api' }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: `books`,
        method: 'POST',
        body: bookData,
      }),
    }),
    getBorrowSummary: builder.query({
      query: () => '/borrow'
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useCreateBookMutation, useGetBorrowSummaryQuery } = baseApi