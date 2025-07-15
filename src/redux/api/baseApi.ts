// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mongoose-assignment3-server.vercel.app/api' }),
  tagTypes: ["Books"],

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
      providesTags: ['Books']
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
    }),
    getBookDetails: builder.query({
      query: ({ id }) => `/books/${id}`,
      providesTags: ['Books']
    }),
    createBorrow: builder.mutation({
      query: (borrowData) => ({
        url: "borrow",
        method: 'POST',
        body: borrowData
      })
    }),
    updateBook: builder.mutation({
      query: ({ bookId, book }) => ({
        url: `/books/${bookId}`,
        method: 'PATCH',
        body: book
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Books'],
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useGetBorrowSummaryQuery,
  useGetBookDetailsQuery,
  useCreateBorrowMutation,
  useUpdateBookMutation,
  useDeleteBookMutation
} = baseApi